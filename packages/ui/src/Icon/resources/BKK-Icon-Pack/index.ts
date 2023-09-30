import './index.css'
import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

map.set("tram", "\uEA38")
map.set("trolleybus", "\uEA45")
map.set("bicycle", "\ue900")
map.set("bicycle-solid", "\ue901")

addMissing(map, 0xE900, 0xEA75)

export default createResource('BKK-Icon-Pack', map);
