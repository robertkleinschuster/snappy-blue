import React, { useState} from "react";
import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input, Divider, Spacer
} from "@nextui-org/react";

export interface SuggestionItemProps {
  key: string, label: string
}

export interface SuggestionInputProps {
  suggest: (text: string) => SuggestionItemProps[]
}

export function SuggestionInput(props: SuggestionInputProps): React.JSX.Element {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<SuggestionItemProps[]>(props.suggest(value));

  return (
    <div>
      <Popover
        backdrop="blur"
        placement="bottom"
      >
        <PopoverTrigger>
          <Button>{value ? value : "Suchen"}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Input
            onValueChange={v => {
              setValue(v);
              setItems(props.suggest(v))
            }}
            ref={(node) => node?.focus()}
            value={value}
           />
          <Spacer />
          <Divider />
            {/* @ts-expect-error Server Component */}
            <Listbox
                aria-label="Single selection example"
                items={items}
                onSelectionChange={() => {console.log('test')}}
                selectedKeys={[]}
                selectionMode="single"
                variant="flat"
            >
              {(item) => (
                  <ListboxItem key={item.key}>
                    {item.label}
                  </ListboxItem>
              )}
            </Listbox>
        </PopoverContent>
      </Popover>
    </div>
  );
}
