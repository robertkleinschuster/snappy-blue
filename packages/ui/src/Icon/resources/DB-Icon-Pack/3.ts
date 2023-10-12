import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>();

map.set("and-sign", "\u0026");
map.set("apostroph", "\u0027");
map.set("restaurant-in-circle", "\u0028");
map.set("park-and-ride-with-bars", "\u0029");
map.set("star", "\u002a");
map.set("plus", "\u002b");
map.set("working-days", "\u002c");
map.set("triangle-upside-down", "\u002d");
map.set("restaurant", "\u002e");
map.set("slash", "\u002f");
map.set("sunday-and-holiday", "\u0030");
map.set("1", "\u0031");
map.set("2", "\u0032");
map.set("3", "\u0033");
map.set("4", "\u0034");
map.set("5", "\u0035");
map.set("6", "\u0036");
map.set("7", "\u0037");
map.set("8", "\u0038");
map.set("9", "\u0039");

addMissing(map, 0x0026, 0x007b)

export default createResource("DB-Icon-Pack-3", map);
