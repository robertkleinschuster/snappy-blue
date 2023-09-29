import React, { useState } from "react";
import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Divider,
  Spacer,
} from "@nextui-org/react";

export interface SuggestionItemProps<T> {
  key: string;
  data: T;
}

export interface SuggestionInputProps<T> {
  loadResults: (text: string) => SuggestionItemProps<T>[];
  children: (itemProps: SuggestionItemProps<T>) => React.JSX.Element;
}

export function SuggestionInput<T>({
  loadResults,
  children,
}: SuggestionInputProps<T>): React.JSX.Element {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Popover backdrop="blur" placement="bottom">
        <PopoverTrigger>
          <Button>{query}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Input
            onValueChange={setQuery}
            ref={(node) => node?.focus()}
            value={query}
          />
          <Spacer />
          <Divider />
          {/* @ts-expect-error Server Component */}
          <Listbox
            aria-label="Single selection example"
            items={loadResults(query)}
            onSelectionChange={console.log}
            selectedKeys={[]}
            selectionMode="single"
            variant="flat"
          >
            {(itemProps) => <ListboxItem key={itemProps.key}>{children(itemProps)}</ListboxItem>}
          </Listbox>
        </PopoverContent>
      </Popover>
    </div>
  );
}
