import { Link, Search } from "ui";
import React from "react";

export default function Index(): React.JSX.Element {
  return (
    <div className="container">
      <h1 className="title">
        Welcome to <br />
        <span>OeVA</span>
      </h1>
        <Search loadResults={() => []} placeholder="test"></Search>
      <p className="description">
        Built With <Link href="https://turbo.build/repo">Turborepo</Link>
        {" & "}
        <Link href="https://remix.run/">Remix</Link>
      </p>
    </div>
  );
}
