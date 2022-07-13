import { IConcept, ITechnology } from "kodyfire-core";
import { join, relative } from "path";
import fs from "fs";
import { Concept as BaseConcept, Engine } from "basic-kodyfire";
import Axios from "axios";
const { plantuml } = require("plantuml-client-js");

export class UseCase  extends BaseConcept {
  constructor(concept: Partial<IConcept>, technology: ITechnology) {
    super(concept, technology);
    this.engine = new Engine();
  }

  async generate(_data: any) {
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
                  left to right direction
                  skinparam actorStyle ${data.actorStyle}
                  ${(data.groups || []).map((group: any) => this.generateGroup(group)).join("\n")}
                  ${(data.relations || []).map((relation: any) => this.generateRelation(relation)).join("\n")}
                  @enduml`;
    return uml;
  }
  generateRelation(relation: any) {
    return `${relation.actor} --> ${relation.action}`;
  }

  generateGroup(data: any) {
    const group = `${ data.packageType != 'none'? `package ${data.name} {` : ''}
      ${(data.useCases || []).map((useCase: any) => this.generateUseCase(useCase)).join("\n")}
      ${(data.actors || []).map((actor: any) => this.generateActor(actor)).join("\n")}
      ${ data.packageType != 'none'? `}` : ''}`;
       
    return group;
  }
  generateActor(actor: any) {
    return `actor ${actor.title} as ${actor.label}`;
  }
  generateUseCase(useCase: any) {
    return `usecase "${useCase.title}" as ${useCase.label}`;
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


