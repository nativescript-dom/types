export interface Attribute {
  description: string;
  name: string;
  type: string;
  source?: any;
}

type EventsType = {
  import: string,
  list: string[]
}

export interface Tag {
  name: string;
  path: string;
  description: string;
  properties: Attribute[];
  attributes: Attribute[];
  events: EventsType;
  source?: string
}

export interface HtmlCustomData {
  version: string;
  tags: Tag[];
  globalAttributes: Attribute[];
}

export interface Element {
  name: string;
  description: string;
  attributes: Attribute[];
  source?: {
    module?: string;
    symbol?: string;
  };
}

export interface Html {
  elements: Element[];
  attributes: Attribute[];
}

export interface Contributions {
  html: Html;
}

export interface WebTypesRoot {
  name: string;
  version: string;
  schema: string;
  contributions: Contributions;
}
