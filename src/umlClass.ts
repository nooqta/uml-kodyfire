import { IConcept, ITechnology } from "kodyfire-core";
import { join, relative } from "path";
import fs from "fs";
import { Concept as BaseConcept, Engine } from "basic-kodyfire";
import Axios from "axios";
const { plantuml } = require("plantuml-client-js");

export class UmlClass extends BaseConcept {
  constructor(concept: Partial<IConcept>, technology: ITechnology) {
    super(concept, technology);
  }

  async generate(_data: any) {
    this.engine = new Engine();
    const uml = this.generateUml(_data);
    const url = plantuml.generateUrl(_data.extension, uml);
    const filepath = join(
      this.technology.rootDir,
      this.outputDir,
      this.getFilename(_data)
    );

    // we save the plantuml file in case there is an error we test it manually at
    // http://www.plantuml.com/plantuml/uml/
    await this.engine.createOrOverwrite(
      this.technology.rootDir,
      this.outputDir,
      join(_data.outputDir, `${_data.name}.puml`),
      uml
    );

    // we create an empty file to avoid error
    await this.engine.createOrOverwrite(
      this.technology.rootDir,
      this.outputDir,
      this.getFilename(_data),
      ""
    );

    await this.downloadResource(url, filepath);
  }

  generateUml(data: any) {
    const uml = `@startuml
                  ${data.theme == 'nul' ? '':`!theme ${data.theme}`}
                  ${(data.classes || []).map((classData: any) => this.generateClass(classData)).join("\n")}
                  @enduml`;
    return uml;
  }

  generateClass(data: any) {
    return `${data.declaration} ${data.name} {
      ${(data.properties || [])
        .map((member: any) => this.generateProperty(member))
        .join("\n")}
      ${(data.methods || [])
        .map((member: any) => this.generateMethod(member))
        .join("\n")}
      }
      
      ${(data.relations || [])
        .map((relation: any) => this.generateRelation(data.name, relation))
        .join("\n")}`
  }

  generateProperty(member: any) {
    return `${member.name} : ${member.type}`;
  }

  generateMethod(member: any) {
    return `${member.visibility} ${member.name}(${this.getParameters(
      member.parameters
    )}) : ${member.returnType}`;
  }

  getParameters(parameters: any) {
    if (!parameters) return "";
    return (parameters || []).map((parameter: any) => `${parameter.name}: ${parameter.type}`).join(", ");
  }

  generateRelation(currentClass: string, relation: {name: string, type: string}) {
    const symbols = { 
      extension: "<|--",
      composition: "*--",
      aggregation: "o--",
      'extension-composition': "<--*",
    }
    const symbol = symbols[relation.type as keyof typeof symbols];
    return `${relation.name} ${symbol} ${currentClass}`;
  }

  async downloadResource(url: any, filepath: string) {
    const response = await Axios({
      url,
      method: "GET",
      responseType: "stream",
    });
    return new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(filepath))
        .on("error", reject)
        .once("close", () => resolve(filepath));
    });
  }

  getFilename(data: any) {
    if (data.filename) return data.filename;
    return join(
      data.outputDir,
      `${data.name}.${this.getExtension(data.extension)}`
    );
  }

  getExtension(templateName: string) {
    return templateName.replace(".template", "").split(".").pop();
  }

  getTemplatesPath(): string {
    return this.technology.params.templatesPath
      ? this.technology.params.templatesPath
      : relative(process.cwd(), __dirname);
  }
}
