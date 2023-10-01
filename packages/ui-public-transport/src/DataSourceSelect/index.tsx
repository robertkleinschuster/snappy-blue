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
                    <Icon icon="logo" key="oebb" resource={ICONS_OEBB} size={20} />
                );
            }
            if (items.at(0)?.key === "db") {
                return (
                    <Icon icon="logo" key="db" resource={ICONS_DB_1} size={20} />
                );
            }
            return null;
        }}
    >
        <SelectItem key="oebb" value="oebb">
            <Icon icon="logo" resource={ICONS_OEBB} size={20} />
        </SelectItem>
        <SelectItem key="db" value="db">
            <Icon icon="logo" resource={ICONS_DB_1} size={20} />
        </SelectItem>
    </Select>
}