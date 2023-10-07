import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import styles from "./styles.css";
import tailwind from "./tailwind.css";
import { NextUIProvider } from "@nextui-org/react";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Blog | Kitchen Sink",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
];

export default function App(): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Analytics />
        </NextUIProvider>
      </body>
    </html>
  );
}
