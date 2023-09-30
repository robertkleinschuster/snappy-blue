import "./index.css"
import {createResource} from "../../resource.ts";

const map = new Map<string, string>;
map.set('schnellbahn', 'S')

export default createResource('OEBB-Icon-Pack', map);
