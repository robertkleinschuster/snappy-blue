import "./index.css"
import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

map.set('right-up-corner', '\u0021')

addMissing(map, 0x0021, 0x00FF)

export default createResource('CD-Icon-Pack', map);
