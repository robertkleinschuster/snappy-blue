import "./index.css"
import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

map.set('s-bahn', '\u0053')

addMissing(map, 0x0021, 0x00FF)

export default createResource('OEBB-Icon-Pack', map);
