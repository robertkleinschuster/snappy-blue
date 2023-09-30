import {createResource} from "../../resource.ts";

const map = new Map<string, string>;
map.set('s-bahn', 'i')
map.set('u-bahn', 'u')

export default createResource('DB-Icon-Pack-2', map);