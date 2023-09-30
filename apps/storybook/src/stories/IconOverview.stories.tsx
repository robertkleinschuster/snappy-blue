import { Meta, StoryObj } from "@storybook/react";
import { Icon, iconResources } from "ui";
import { ICONS_BKK } from "ui/src";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Snippet,
  Pagination,
} from "@nextui-org/react";
import { useState } from "react";

interface IconOverviewProps {
  resource: string;
  size: number;
  itemsPerPage: number;
}

function IconOverview({
  resource,
  size,
  itemsPerPage,
}: IconOverviewProps): React.JSX.Element {
  const names = iconResources.getResource(resource).names.map((name) => {
    return { name: name };
  });

  const pages = Math.ceil(names.length / itemsPerPage);
  const [page, setPage] = useState(1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Pagination page={page} showControls total={pages} onChange={setPage} />
      <Table>
        <TableHeader>
          <TableColumn key="preview">Preview</TableColumn>
          <TableColumn key="name">Name</TableColumn>
        </TableHeader>
        <TableBody
          items={names.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
          )}
        >
          {(name) => (
            <TableRow key={name.name}>
              {(columnKey) => (
                <TableCell>
                  {columnKey == "preview" ? (
                    <Icon resource={resource} icon={name.name} size={size} />
                  ) : (
                    <Snippet>{name.name}</Snippet>
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination page={page} showControls total={pages} onChange={setPage} />
    </div>
  );
}

export default {
  title: "Icon/Overview",
  component: IconOverview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    resource: {
      control: "select",
      options: iconResources.names,
    },
    size: {
      control: {
        type: "range",
        min: 12,
        max: 200,
      },
    },
  },
  args: {
    size: 40,
    resource: ICONS_BKK,
    itemsPerPage: 5,
  },
} satisfies Meta<typeof IconOverview>;

export const Overview: StoryObj<typeof IconOverview> = {};
