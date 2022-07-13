"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.activityArray = exports.sequenceArray = exports.useCaseArray = exports.umlClassArray = exports.conceptArray = exports.uml = exports.activityUml = exports.sequenceUml = exports.useCaseUml = exports.umlClass = exports.themes = exports.concept = void 0;
exports.concept = {
    type: "object",
    properties: {
        name: { type: "string" },
        template: {
            type: "string",
            enum: ["sample.html.template", "my.html.template", "concept.ts.template"],
        },
        outputDir: { type: "string" },
        title: { type: "string" },
    },
};
exports.themes = [
    "nul",
    "amiga",
    "aws-orange",
    "black-knight",
    "bluegray",
    "blueprint",
    "cerulean-outline",
    "cerulean",
    "crt-amber",
    "crt-green",
    "cyborg-outline",
    "cyborg",
    "hacker",
    "lightgray",
    "mars",
    "materia-outline",
    "materia",
    "metal",
    "mimeograph",
    "minty",
    "plain",
    "reddress-darkblue",
    "reddress-darkgreen",
    "reddress-darkorange",
    "reddress-darkred",
    "reddress-lightblue",
    "reddress-lightgreen",
    "reddress-lightorange",
    "reddress-lightred",
    "sandstone",
    "silver",
    "sketchy-outline",
    "sketchy",
    "spacelab",
    "spacelab-white",
    "superhero-outline",
    "superhero",
    "toy",
    "united",
    "vibrant",
];
exports.umlClass = {
    type: "object",
    properties: {
        name: { type: "string" },
        declaration: {
            enum: ["class", "interface", "enum"],
        },
        methods: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    visibility: { type: "string", default: "public" },
                    name: { type: "string" },
                    parameters: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                type: { type: "string" },
                            },
                        },
                    },
                    returnType: { type: "string" },
                },
            },
        },
        properties: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    visibility: { type: "string", default: "public" },
                    type: { type: "string" },
                    name: { type: "string" },
                },
            },
        },
        relations: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    type: {
                        enum: [
                            "extension",
                            "composition",
                            "aggregation",
                            "extension-composition",
                        ],
                    },
                    label: { type: "string" },
                },
            },
        },
    }
};
exports.useCaseUml = {
    type: "object",
    properties: {
        name: { type: "string" },
        extension: { enum: ['png', 'svg'], default: 'png' },
        theme: {
            enum: exports.themes
        },
        outputDir: { type: "string" },
        actorStyle: {
            enum: ['stick', 'awesome', 'hollow'],
            default: 'stick'
        },
        groups: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    packageType: {
                        enum: ['package', 'rectangle', 'none'],
                        default: 'none'
                    },
                    useCases: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                title: { type: "string" },
                                label: { type: "string" }
                            }
                        }
                    },
                    actors: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                title: { type: "string" },
                                label: { type: "string" }
                            }
                        }
                    }
                }
            }
        },
        relations: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    actor: { type: "string" },
                    action: { type: "string" }
                }
            }
        }
    }
};
exports.sequenceUml = {
    type: "object",
    properties: {
        name: { type: "string" },
        extension: { enum: ['png', 'svg'], default: 'png' },
        theme: {
            enum: exports.themes
        },
        outputDir: { type: "string" }
    }
};
exports.activityUml = {
    type: "object",
    properties: {
        name: { type: "string" },
        extension: { enum: ['png', 'svg'], default: 'png' },
        theme: {
            enum: exports.themes
        },
        outputDir: { type: "string" }
    }
};
exports.uml = {
    type: "object",
    properties: {
        name: { type: "string" },
        extension: { enum: ['png', 'svg'], default: 'png' },
        theme: {
            enum: exports.themes,
            default: "nul"
        },
        classes: {
            type: "array",
            items: exports.umlClass
        },
        outputDir: { type: "string" },
    },
};
exports.conceptArray = {
    type: "array",
    items: exports.concept,
};
exports.umlClassArray = {
    type: "array",
    items: exports.uml,
};
exports.useCaseArray = {
    type: "array",
    items: exports.useCaseUml,
};
exports.sequenceArray = {
    type: "array",
    items: exports.sequenceUml,
};
exports.activityArray = {
    type: "array",
    items: exports.activityUml,
};
exports.schema = {
    type: "object",
    properties: {
        project: { type: "string" },
        name: { type: "string" },
        rootDir: { type: "string" },
        concept: exports.conceptArray,
        umlClass: exports.umlClassArray,
        useCase: exports.useCaseArray,
        sequence: exports.sequenceArray,
        activity: exports.activityArray
    },
    required: ["name"],
};
//# sourceMappingURL=schema.js.map