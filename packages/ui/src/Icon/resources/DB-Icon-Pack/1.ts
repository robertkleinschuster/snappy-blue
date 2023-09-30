import {createResource} from "../../resource.ts";

const map = new Map<string, string>;
map.set('logo', '.')
map.set('airplane', ':')
map.set('wheelchair', '-')

export default createResource('DB-Icon-Pack-1', map);