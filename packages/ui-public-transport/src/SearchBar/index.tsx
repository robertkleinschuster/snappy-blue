import React from "react";
import { Search } from "ui";
import { DataSourceSelect } from "../DataSourceSelect";

export type SearchBarProps = {
  className: string
}

export function SearchBar({className}: SearchBarProps): React.JSX.Element {
  return (
    <div className={className + " flex gap-4"}>
    
        <DataSourceSelect />
        <Search loadResults={() => []} placeholder="Suchen..." />
    </div>
  );
}
