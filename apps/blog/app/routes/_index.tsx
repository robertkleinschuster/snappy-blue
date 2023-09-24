import { CounterButton, Link } from "ui";
import React from "react";

export default function Index(): React.JSX.Element {
  return (
    <div className="container">
      <h1 className="title">
        Blog <br />
        <span>Hello World</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With <Link href="https://turbo.build/repo">Turborepo</Link>
        {" & "}
        <Link href="https://remix.run/">Remix</Link>
      </p>
    </div>
  );
}
