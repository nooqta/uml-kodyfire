export const concept = {
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

export const themes = [
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

export const umlClass = {
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
}
export const useCaseUml = {
  type: "object",
  properties: {
  name: { type: "string" },
    extension: {enum: ['png', 'svg'], default: 'png'},
    theme: {
      enum: themes
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
}

export const sequenceUml = {
  type: "object",
  properties: {
    name: { type: "string" },
    extension: {enum: ['png', 'svg'], default: 'png'},
    theme: {
      enum: themes
    },
    outputDir: { type: "string" }
  }
}

export const activityUml = {
  type: "object",
  properties: {
    name: { type: "string" },
    extension: {enum: ['png', 'svg'], default: 'png'},
    theme: {
      enum: themes
    },
    outputDir: { type: "string" }
  }
}

export const uml = {
  type: "object",
  properties: {
    name: { type: "string" },
    extension: {enum: ['png', 'svg'], default: 'png'},
    theme: {
      enum: themes,
      default: "nul"
    },
    classes: {
      type: "array",
      items:  umlClass
    },
    outputDir: { type: "string" },
  },
};

export const conceptArray = {
  type: "array",
  items: concept,
};
export const umlClassArray = {
  type: "array",
  items: uml,
};
export const useCaseArray = {
  type: "array",
  items: useCaseUml,
};
export const sequenceArray = {
  type: "array",
  items: sequenceUml,
};
export const activityArray = {
  type: "array",
  items: activityUml,
};
export const schema = {
  type: "object",
  properties: {
    project: { type: "string" },
    name: { type: "string" },
    rootDir: { type: "string" },
    concept: conceptArray,
    umlClass: umlClassArray,
    useCase: useCaseArray,
    sequence: sequenceArray,
    activity: activityArray
  },
  required: ["name"],
};
