"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const basic_kodyfire_1 = require("basic-kodyfire");
const axios_1 = __importDefault(require("axios"));
const { plantuml } = require("plantuml-client-js");
class UseCase extends basic_kodyfire_1.Concept {
    constructor(concept, technology) {
        super(concept, technology);
        this.engine = new basic_kodyfire_1.Engine();
    }
    generate(_data) {
        return __awaiter(this, void 0, void 0, function* () {
            const uml = this.generateUml(_data);
            const url = plantuml.generateUrl(_data.extension, uml);
            const filepath = (0, path_1.join)(this.technology.rootDir, this.outputDir, this.getFilename(_data));
            // we save the plantuml file in case there is an error we test it manually at
            // http://www.plantuml.com/plantuml/uml/
            yield this.engine.createOrOverwrite(this.technology.rootDir, this.outputDir, (0, path_1.join)(_data.outputDir, `${_data.name}.puml`), uml);
            // we create an empty file to avoid error
            yield this.engine.createOrOverwrite(this.technology.rootDir, this.outputDir, this.getFilename(_data), "");
            yield this.downloadResource(url, filepath);
        });
    }
    generateUml(data) {
        const uml = `@startuml
                  ${data.theme == 'nul' ? '' : `!theme ${data.theme}`}
                  left to right direction
                  skinparam actorStyle ${data.actorStyle}
                  ${(data.groups || []).map((group) => this.generateGroup(group)).join("\n")}
                  ${(data.relations || []).map((relation) => this.generateRelation(relation)).join("\n")}
                  @enduml`;
        return uml;
    }
    generateRelation(relation) {
        return `${relation.actor} --> ${relation.action}`;
    }
    generateGroup(data) {
        const group = `${data.packageType != 'none' ? `package ${data.name} {` : ''}
      ${(data.useCases || []).map((useCase) => this.generateUseCase(useCase)).join("\n")}
      ${(data.actors || []).map((actor) => this.generateActor(actor)).join("\n")}
      ${data.packageType != 'none' ? `}` : ''}`;
        return group;
    }
    generateActor(actor) {
        return `actor ${actor.title} as ${actor.label}`;
    }
    generateUseCase(useCase) {
        return `usecase "${useCase.title}" as ${useCase.label}`;
    }
    downloadResource(url, filepath) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, axios_1.default)({
                url,
                method: "GET",
                responseType: "stream",
            });
            return new Promise((resolve, reject) => {
                response.data
                    .pipe(fs_1.default.createWriteStream(filepath))
                    .on("error", reject)
                    .once("close", () => resolve(filepath));
            });
        });
    }
    getFilename(data) {
        if (data.filename)
            return data.filename;
        return (0, path_1.join)(data.outputDir, `${data.name}.${this.getExtension(data.extension)}`);
    }
    getExtension(templateName) {
        return templateName.replace(".template", "").split(".").pop();
    }
    getTemplatesPath() {
        return this.technology.params.templatesPath
            ? this.technology.params.templatesPath
            : (0, path_1.relative)(process.cwd(), __dirname);
    }
}
exports.UseCase = UseCase;
//# sourceMappingURL=useCase.js.map