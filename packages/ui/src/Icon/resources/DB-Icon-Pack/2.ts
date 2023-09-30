import { addMissing, createResource } from "../../resource.ts";

const map = new Map<string, string>();

map.set("mc-donalds", "\u0028");
map.set("s-bahn", "\u0069");
map.set("u-bahn", "\u0075");

addMissing(map, 0x0026, 0x007b);

export default createResource("DB-Icon-Pack-2", map);
