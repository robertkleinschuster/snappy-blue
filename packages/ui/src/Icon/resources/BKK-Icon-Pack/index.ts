import './index.css'
import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

map.set("tram", "\uEA38")
map.set("trolleybus", "\uEA45")
map.set("bicycle", "\ue900")
map.set("bicycle-solid", "\ue901")
map.set("word", "\ue902")
map.set("word-solid", "\ue903")
map.set("facebook", "\ue904")
map.set("facebook-solid", "\ue905")
map.set("paper", "\ue906")
map.set("paper-solid", "\ue907")
map.set("instagram", "\ue908")
map.set("instagram-solid", "\ue909")
map.set("pdf", "\ue90a")
map.set("pdf-solid", "\ue90b")
map.set("plane", "\ue90c")
map.set("plane-solid", "\ue90d")
map.set("arrows", "\ue90e")
map.set("arrows-solid", "\ue90f")
map.set("hamburger-menu-icon", "\ue910")
map.set("excel", "\ue911")
map.set("excel-solid", "\ue912")

addMissing(map, 0xE900, 0xEA75)

export default createResource('BKK-Icon-Pack', map);
