import { CliArgumentsMap, HtmlCustomData, OutputType, Tag, WebTypesRoot } from "../types";

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
    version: "1.1",
    tags: [],
  };

  for (let tag of data.tags) {
    if (metadata.tags.length === 1) continue;
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
        metadata.tags[index].attributes.push({
          ...attribute,
          source: path,
        });
        webTypes.contributions.html.elements[index2].attributes.push({
          ...attribute,
          source: path,
        });
      }
    }

    if (tag.events) {
      for (let event of tag.events) {
        metadata.tags[index].attributes.push({
          ...event,
          name: `(${event.name})`,
          source: path,
          description: `${event.description}\n\n@emits ${event.type}`,
        });
        webTypes.contributions.html.elements[index2].attributes.push({
          ...event,
          name: `(${event.name})`,
          source: path,
          description: `${event.description}\n\n@emits ${event.type}`,
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