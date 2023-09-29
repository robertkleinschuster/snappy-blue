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
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

export interface SuggestionItemProps<T> {
  key: string;
  data: T;
}

export interface SuggestionInputProps<T> {
  loadResults: (text: string) => SuggestionItemProps<T>[];
  placeholder: string;
  children: (itemProps: SuggestionItemProps<T>) => React.JSX.Element;
}

export function Search<T>({
  loadResults,
  placeholder,
  children,
}: SuggestionInputProps<T>): React.JSX.Element {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Popover backdrop="blur" containerPadding={0} placement="bottom">
        <PopoverTrigger>
          <Button className="w-60 text-default-500 bg-default-400/20 dark:bg-default-500/20">
            <FiSearch />
            {query ? query : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-60">
          <div className="p-3 w-full">
            <Input
              fullWidth
              className="m-0 p-0"
              onValueChange={setQuery}
              ref={(node) => node?.focus()}
              value={query}
            />
          </div>

          <Divider />
          {/* @ts-expect-error Server Component */}
          <Listbox
            aria-label="Ergebnisse"
            className="p-3"
            items={loadResults(query)}
            onSelectionChange={console.log}
            selectedKeys={[]}
            selectionMode="single"
            variant="flat"
          >
            {(itemProps) => (
              <ListboxItem key={itemProps.key}>
                {children(itemProps)}
              </ListboxItem>
            )}
          </Listbox>
        </PopoverContent>
      </Popover>
    </div>
  );
}
