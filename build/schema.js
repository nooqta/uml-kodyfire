"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.conceptArray = exports.umlClassArray = exports.uml = exports.umlClass = exports.concept = void 0;
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
exports.uml = {
    type: "object",
    properties: {
        name: { type: "string" },
        extension: { enum: ['png', 'svg'], default: 'png' },
        theme: {
            enum: [
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
            ],
            default: "nul"
        },
        classes: {
            type: "array",
            items: exports.umlClass
        },
        outputDir: { type: "string" },
    },
};
exports.umlClassArray = {
    type: "array",
    items: exports.uml,
};
exports.conceptArray = {
    type: "array",
    items: exports.concept,
};
exports.schema = {
    type: "object",
    properties: {
        project: { type: "string" },
        name: { type: "string" },
        rootDir: { type: "string" },
        concept: exports.conceptArray,
        umlClass: exports.umlClassArray,
    },
    required: ["name"],
};
//# sourceMappingURL=schema.js.map