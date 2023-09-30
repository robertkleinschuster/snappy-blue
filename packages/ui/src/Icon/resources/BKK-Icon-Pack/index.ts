import './index.css'
import {createResource} from "../../resource.ts";

const map = new Map<string, string>;
map.set("tram", "")
map.set("trolleybus", "")

export default createResource('BKK-Icon-Pack', map);
