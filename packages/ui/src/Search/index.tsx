import type { Key} from "react";
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

export interface SearchProps<T> {
  loadResults: (text: string) => SuggestionItemProps<T>[];
  placeholder: string;
  children?: (itemProps: SuggestionItemProps<T>) => React.JSX.Element;
  className?: string;
  onSelect?: (key: Key) => void;
}

export function Search<T>({
  loadResults,
  placeholder,
  children,
  className,
  onSelect,
}: SearchProps<T>): React.JSX.Element {
  const [query, setQuery] = useState("");

  return (
    <Popover backdrop="blur" className="w-full" containerPadding={0} placement="bottom">
      <PopoverTrigger>
        <Button className={className} fullWidth variant="faded">
          <FiSearch />
          {query ? query : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[80vw]">
        <div className="p-3 w-full"> 
          <Input
            className="m-0 p-0"
            fullWidth
            onValueChange={setQuery}
            ref={(node) => node?.focus()}
            value={query}
          />
        </div>

        <Divider />
        <Listbox
          aria-label="Ergebnisse"
          className="p-3"
          items={loadResults(query)}
          onAction={(key) => {
            if (onSelect) {
              onSelect(key );
            }
          }}
          selectedKeys={[]}
          selectionMode="single"
          variant="flat"
        >
          {(itemProps) => (
            <ListboxItem key={itemProps.key}>
              {children ? children(itemProps) : <>{itemProps.data}</>}
            </ListboxItem>
          )}
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}
