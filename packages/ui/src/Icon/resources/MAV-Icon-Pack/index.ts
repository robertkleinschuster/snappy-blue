import "./index.css"
import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

map.set('railjet', '\u0143')
map.set('nightjet', '\u019f')
map.set('railjet-express', '\u01ad')
map.set('intercity', '\u01da')

addMissing(map, 0x0021, 0x0874)

export default createResource('MAV-Icon-Pack', map);
