export declare const concept: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        template: {
            type: string;
            enum: string[];
        };
        outputDir: {
            type: string;
        };
        title: {
            type: string;
        };
    };
};
export declare const themes: string[];
export declare const umlClass: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        declaration: {
            enum: string[];
        };
        methods: {
            type: string;
            items: {
                type: string;
                properties: {
                    visibility: {
                        type: string;
                        default: string;
                    };
                    name: {
                        type: string;
                    };
                    parameters: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                    returnType: {
                        type: string;
                    };
                };
            };
        };
        properties: {
            type: string;
            items: {
                type: string;
                properties: {
                    visibility: {
                        type: string;
                        default: string;
                    };
                    type: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                };
            };
        };
        relations: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    type: {
                        enum: string[];
                    };
                    label: {
                        type: string;
                    };
                };
            };
        };
    };
};
export declare const useCaseUml: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        extension: {
            enum: string[];
            default: string;
        };
        theme: {
            enum: string[];
        };
        outputDir: {
            type: string;
        };
        actorStyle: {
            enum: string[];
            default: string;
        };
        groups: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    packageType: {
                        enum: string[];
                        default: string;
                    };
                    useCases: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                title: {
                                    type: string;
                                };
                                label: {
                                    type: string;
                                };
                            };
                        };
                    };
                    actors: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                title: {
                                    type: string;
                                };
                                label: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        relations: {
            type: string;
            items: {
                type: string;
                properties: {
                    actor: {
                        type: string;
                    };
                    action: {
                        type: string;
                    };
                };
            };
        };
    };
};
export declare const sequenceUml: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        extension: {
            enum: string[];
            default: string;
        };
        theme: {
            enum: string[];
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const activityUml: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        extension: {
            enum: string[];
            default: string;
        };
        theme: {
            enum: string[];
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const uml: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        extension: {
            enum: string[];
            default: string;
        };
        theme: {
            enum: string[];
            default: string;
        };
        classes: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    declaration: {
                        enum: string[];
                    };
                    methods: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                visibility: {
                                    type: string;
                                    default: string;
                                };
                                name: {
                                    type: string;
                                };
                                parameters: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            type: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                                returnType: {
                                    type: string;
                                };
                            };
                        };
                    };
                    properties: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                visibility: {
                                    type: string;
                                    default: string;
                                };
                                type: {
                                    type: string;
                                };
                                name: {
                                    type: string;
                                };
                            };
                        };
                    };
                    relations: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                type: {
                                    enum: string[];
                                };
                                label: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const conceptArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            template: {
                type: string;
                enum: string[];
            };
            outputDir: {
                type: string;
            };
            title: {
                type: string;
            };
        };
    };
};
export declare const umlClassArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            extension: {
                enum: string[];
                default: string;
            };
            theme: {
                enum: string[];
                default: string;
            };
            classes: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        declaration: {
                            enum: string[];
                        };
                        methods: {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    visibility: {
                                        type: string;
                                        default: string;
                                    };
                                    name: {
                                        type: string;
                                    };
                                    parameters: {
                                        type: string;
                                        items: {
                                            type: string;
                                            properties: {
                                                name: {
                                                    type: string;
                                                };
                                                type: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                    returnType: {
                                        type: string;
                                    };
                                };
                            };
                        };
                        properties: {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    visibility: {
                                        type: string;
                                        default: string;
                                    };
                                    type: {
                                        type: string;
                                    };
                                    name: {
                                        type: string;
                                    };
                                };
                            };
                        };
                        relations: {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    name: {
                                        type: string;
                                    };
                                    type: {
                                        enum: string[];
                                    };
                                    label: {
                                        type: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const useCaseArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            extension: {
                enum: string[];
                default: string;
            };
            theme: {
                enum: string[];
            };
            outputDir: {
                type: string;
            };
            actorStyle: {
                enum: string[];
                default: string;
            };
            groups: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        packageType: {
                            enum: string[];
                            default: string;
                        };
                        useCases: {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    title: {
                                        type: string;
                                    };
                                    label: {
                                        type: string;
                                    };
                                };
                            };
                        };
                        actors: {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    title: {
                                        type: string;
                                    };
                                    label: {
                                        type: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            relations: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        actor: {
                            type: string;
                        };
                        action: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const sequenceArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            extension: {
                enum: string[];
                default: string;
            };
            theme: {
                enum: string[];
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const activityArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            extension: {
                enum: string[];
                default: string;
            };
            theme: {
                enum: string[];
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const schema: {
    type: string;
    properties: {
        project: {
            type: string;
        };
        name: {
            type: string;
        };
        rootDir: {
            type: string;
        };
        concept: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    template: {
                        type: string;
                        enum: string[];
                    };
                    outputDir: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                };
            };
        };
        umlClass: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    extension: {
                        enum: string[];
                        default: string;
                    };
                    theme: {
                        enum: string[];
                        default: string;
                    };
                    classes: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                declaration: {
                                    enum: string[];
                                };
                                methods: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            visibility: {
                                                type: string;
                                                default: string;
                                            };
                                            name: {
                                                type: string;
                                            };
                                            parameters: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        type: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                            returnType: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                                properties: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            visibility: {
                                                type: string;
                                                default: string;
                                            };
                                            type: {
                                                type: string;
                                            };
                                            name: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                                relations: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            type: {
                                                enum: string[];
                                            };
                                            label: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
        useCase: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    extension: {
                        enum: string[];
                        default: string;
                    };
                    theme: {
                        enum: string[];
                    };
                    outputDir: {
                        type: string;
                    };
                    actorStyle: {
                        enum: string[];
                        default: string;
                    };
                    groups: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                packageType: {
                                    enum: string[];
                                    default: string;
                                };
                                useCases: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            title: {
                                                type: string;
                                            };
                                            label: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                                actors: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            title: {
                                                type: string;
                                            };
                                            label: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    relations: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                actor: {
                                    type: string;
                                };
                                action: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        sequence: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    extension: {
                        enum: string[];
                        default: string;
                    };
                    theme: {
                        enum: string[];
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
        activity: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    extension: {
                        enum: string[];
                        default: string;
                    };
                    theme: {
                        enum: string[];
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
    };
    required: string[];
};
