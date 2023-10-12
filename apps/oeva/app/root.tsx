import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
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
import { useSWEffect, LiveReload } from '@remix-pwa/sw'

export const meta: MetaFunction = () => [
  {
    title: "Blog | Kitchen Sink",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
];

export default function App(): React.JSX.Element {
  useSWEffect();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
            content="width=device-width,initial-scale=1"
            name="viewport"
        />
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
