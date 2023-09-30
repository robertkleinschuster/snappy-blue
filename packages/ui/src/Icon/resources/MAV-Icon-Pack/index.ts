import "./index.css"
import {createResource} from "../../resource.ts";

const map = new Map<string, string>;
map.set('railjet', 'Ń')
map.set('nightjet', 'Ɵ')
map.set('railjet-express', 'ƭ')
map.set('intercity', 'ǚ')

export default createResource('MAV-Icon-Pack', map);
