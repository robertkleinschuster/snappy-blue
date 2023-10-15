import { ResourceCollection } from "../resource.ts";
import bkkResource from "./BKK-Icon-Pack";
import mavResource from "./MAV-Icon-Pack";
import oebbResource from "./OEBB-Icon-Pack";
import * as db from "./DB-Icon-Pack";

export const ICONS_BKK = bkkResource.fontFamily;
export const ICONS_MAV = mavResource.fontFamily;
export const ICONS_OEBB = oebbResource.fontFamily;
export const ICONS_DB_1 = db.resource1.fontFamily;
export const ICONS_DB_2 = db.resource2.fontFamily;
export const ICONS_DB_3 = db.resource3.fontFamily;
export const ICONS_DB_4 = db.resource4.fontFamily;
export const ICONS_DB_5 = db.resource5.fontFamily;
export const ICONS_DB_6 = db.resource6.fontFamily;

const resources = new ResourceCollection();

resources.add(bkkResource);
resources.add(mavResource);
resources.add(oebbResource);
resources.add(db.resource1);
resources.add(db.resource2);
resources.add(db.resource3);
resources.add(db.resource4);
resources.add(db.resource5);
resources.add(db.resource6);

export { resources as iconResources };
