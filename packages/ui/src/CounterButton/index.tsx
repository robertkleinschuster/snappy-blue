import { useState } from "react";
import {Button, Card, CardBody, CardHeader, Code, Divider, Spacer} from "@nextui-org/react";

export function CounterButton(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>
          This component is from
          <Spacer/>
          <Code>ui</Code>
      </CardHeader>
        <Divider/>
      <CardBody>
        <Button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          color="primary"
        >
          Count: {count}
        </Button>
      </CardBody>
    </Card>
  );
}
