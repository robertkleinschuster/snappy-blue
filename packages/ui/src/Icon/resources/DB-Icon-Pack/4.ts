import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

addMissing(map, 0x0026, 0x007b)
export default createResource('DB-Icon-Pack-4', map);