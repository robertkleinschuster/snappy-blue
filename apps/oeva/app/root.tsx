import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLocation,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { NextUIProvider, Tab, Tabs } from "@nextui-org/react";
import { useSWEffect, LiveReload } from "@remix-pwa/sw";
import { useNavigate } from "react-router-dom";
import styles from "./styles.css";
import uiStyles from "ui/dist/index.css";
import uiPublicTransport from "ui-public-transport/dist/index.css";
import tailwind from "./tailwind.css";

export const meta: MetaFunction = () => [
  {
    title: "OeVA | Öffi-Verkehrsauskunft",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: uiStyles },
  { rel: "stylesheet", href: uiPublicTransport },
  { rel: "stylesheet", href: styles },
];

export default function App(): React.JSX.Element {
  useSWEffect();
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui"
          name="viewport"
        />
        <link rel="manifest" href="manifest.webmanifest" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider className="flex flex-col h-screen">
          <div className="flex-grow">
            <Outlet />
          </div>
          <Tabs
            defaultSelectedKey={location.pathname}
            fullWidth
            onSelectionChange={(key) => navigate(key as string)}
            radius="none"
            size="lg"
          >
            <Tab key="/favorites" title="Favoriten" />
            <Tab key="/trains" title="Zugläufe" />
            <Tab key="/departures" title="Abfahrten" />
          </Tabs>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Analytics />
        </NextUIProvider>
      </body>
    </html>
  );
}
