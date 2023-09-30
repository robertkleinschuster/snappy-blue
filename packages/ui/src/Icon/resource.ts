export class Resource {
  constructor(public fontFamily: string, private chars: Map<string, string>) {}

  public getChar(name: string): string {
    const char = this.chars.get(name);
    if (!char) {
      throw new Error(`No char for name: \`${name}\`!`);
    }
    return char;
  }

  get names(): string[]
  {
    return Array.from(this.chars.keys())
  }
}

export class ResourceCollection {
  private map = new Map<string, Resource>();

  public add(resource: Resource): this {
    if (this.map.has(resource.fontFamily)) {
      throw new Error(
        `Resource with name \`${resource.fontFamily}\` already added.`
      );
    }
    this.map.set(resource.fontFamily, resource);
    return this;
  }

  public getChar(resource: string, icon: string): string {
    return this.getResource(resource).getChar(icon);
  }

  public getFontFamily(resource: string): string
  {
    return this.getResource(resource).fontFamily
  }

  public getResource(name: string)
  {
    const resource = this.map.get(name);

    if (!resource) {
      throw new Error(`No resource with name: \`${name}\``);
    }
    return resource;
  }

  get names(): string[]
  {
    return Array.from(this.map.keys())
  }
}

export function createResource(
  fontFamily: string,
  chars: Map<string, string>
): Resource {
  return new Resource(fontFamily, chars);
}
