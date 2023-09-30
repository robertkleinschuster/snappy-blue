import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>();

map.set("bike", "\u0073");
map.set("car", "\u0069");

addMissing(map, 0x0026, 0x007b)

export default createResource("DB-Icon-Pack-3", map);
