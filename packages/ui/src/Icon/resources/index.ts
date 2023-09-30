import { ResourceCollection } from "../resource.ts";
import bkkIconResource from "./BKK-Icon-Pack";
import mavIconResource from "./MAV-Icon-Pack";
import oebbIconResource from "./OEBB-Icon-Pack";

export const ICONS_BKK = bkkIconResource.fontFamily;
export const ICONS_MAV = mavIconResource.fontFamily;
export const ICONS_OEBB = oebbIconResource.fontFamily;

const resources = new ResourceCollection();

resources.add(bkkIconResource);
resources.add(mavIconResource);
resources.add(oebbIconResource);

export { resources as iconResources };
