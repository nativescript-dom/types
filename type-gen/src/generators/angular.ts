import {
  Attribute,
  AttributeValue,
  CliArgumentsMap,
  HtmlCustomData,
  OutputType,
  Tag,
  WebTypesRoot,
} from "../types";

function extractValuesFromAttributeType(
  attribute: Attribute
): AttributeValue[] | undefined {
  if (attribute.type === "boolean") {
    return [
      {
        name: "true",
      },
      {
        name: "false",
      },
    ];
  }

  return undefined;
}

export function generateAngularTypes(
  args: CliArgumentsMap,
  path: string,
  data: HtmlCustomData
): OutputType[] {
  const webTypes: WebTypesRoot = {
    name: "@nativescript-dom/angular-types",
    schema:
      "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
    version: "2.0.0",
    contributions: {
      html: {
        elements: [],
        attributes: [],
      },
    },
  };

  const metadata: HtmlCustomData = {
    $schema:
      "https://raw.githubusercontent.com/microsoft/vscode-html-languageservice/refs/heads/main/docs/customData.schema.json",
    version: 1.1,
    tags: [],
  };

  for (let tag of data.tags) {
    const index =
      metadata.tags.push({
        name: tag.name,
        description: tag.description,
        attributes: [],
      } as Tag) - 1;

    const index2 =
      webTypes.contributions.html.elements.push({
        name: tag.name,
        description: tag.description,
        attributes: [],
      }) - 1;

    if (tag.properties) {
      for (let attribute of tag.properties) {
        const description =
          attribute.description + `\n\n@type ${attribute.type}`;
        metadata.tags[index].attributes.push({
          ...attribute,
          source: path,
          values: extractValuesFromAttributeType(attribute),
          description,
        });
        webTypes.contributions.html.elements[index2].attributes.push({
          ...attribute,
          source: path,
          description,
        });
      }
    }

    if (tag.events) {
      for (let event of tag.events) {
        metadata.tags[index].attributes.push({
          ...event,
          name: `(${event.name})`,
          source: path,
          description: `${event.description}\n\n@type ${event.type}`,
        });
        webTypes.contributions.html.elements[index2].attributes.push({
          ...event,
          name: `(${event.name})`,
          source: path,
          description: `${event.description}\n\n@type ${event.type}`,
        });
      }
    }
  }

  return [
    {
      data: JSON.stringify(webTypes),
      format: "json",
      nameSuffix: "web-types",
    },
    {
      data: JSON.stringify(metadata),
      format: "json",
      nameSuffix: "metadata",
    },
  ];
}
