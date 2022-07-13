import { IConcept, ITechnology } from "kodyfire-core";
import { Concept as BaseConcept } from "basic-kodyfire";
export declare class UseCase extends BaseConcept {
    constructor(concept: Partial<IConcept>, technology: ITechnology);
    generate(_data: any): Promise<void>;
    generateUml(data: any): string;
    generateRelation(relation: any): string;
    generateGroup(data: any): string;
    generateActor(actor: any): string;
    generateUseCase(useCase: any): string;
    downloadResource(url: any, filepath: string): Promise<unknown>;
    getFilename(data: any): any;
    getExtension(templateName: string): string | undefined;
    getTemplatesPath(): string;
}
