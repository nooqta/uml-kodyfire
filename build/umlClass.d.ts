import { IConcept, ITechnology } from "kodyfire-core";
import { Concept as BaseConcept } from "basic-kodyfire";
export declare class UmlClass extends BaseConcept {
    constructor(concept: Partial<IConcept>, technology: ITechnology);
    generate(_data: any): Promise<void>;
    generateUml(data: any): string;
    generateClass(data: any): string;
    generateProperty(member: any): string;
    generateMethod(member: any): string;
    getParameters(parameters: any): any;
    generateRelation(currentClass: string, relation: {
        name: string;
        type: string;
    }): string;
    downloadResource(url: any, filepath: string): Promise<unknown>;
    getFilename(data: any): any;
    getExtension(templateName: string): string | undefined;
    getTemplatesPath(): string;
}
