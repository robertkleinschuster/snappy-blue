import { addMissing, createResource } from "../../resource.ts";

const map = new Map<string, string>();

map.set("logo", "\u002e");
map.set("airplane", "\u003a");
map.set("wheelchair", "\u002d");

addMissing(map, 0x0026, 0x007b);

export default createResource("DB-Icon-Pack-1", map);
