import "./index.css"
import {createResource} from "../../resource.ts";

const map = new Map<string, string>;
map.set('s-bahn', 'S')

export default createResource('OEBB-Icon-Pack', map);
