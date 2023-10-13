import {Select, SelectItem} from "@nextui-org/react";
import {Icon, ICONS_DB_1, ICONS_OEBB} from "ui";
import React from "react";

export function DataSourceSelect(): React.JSX.Element {

    return <Select
        className="w-32"
        labelPlacement="outside"
        renderValue={(items) => {
            if (items.at(0)?.key === "oebb") {
                return (
                    <Icon icon="oebb-logo-wortmarke" key="oebb" resource={ICONS_OEBB} size={20} />
                );
            }
            if (items.at(0)?.key === "db") {
                return (
                    <Icon icon="db-keks-cookie-of-db" key="db" resource={ICONS_DB_1} size={20} />
                );
            }
            return null;
        }}
    >
        <SelectItem textValue="ÖBB" key="oebb" value="oebb">
            <Icon icon="oebb-logo-wortmarke" resource={ICONS_OEBB} size={20} />
        </SelectItem>
        <SelectItem textValue="DB" key="db" value="db">
            <Icon icon="db-keks-cookie-of-db" resource={ICONS_DB_1} size={20} />
        </SelectItem>
    </Select>
}