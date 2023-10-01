import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { Search } from "ui";
import { DataSourceSelect } from "../DataSourceSelect";

export function SearchBar(): React.JSX.Element {
  return (
    <Navbar>
      <NavbarContent className="flex">
        <DataSourceSelect />
        <Search loadResults={() => []} placeholder="Suchen..." />
      </NavbarContent>
    </Navbar>
  );
}
