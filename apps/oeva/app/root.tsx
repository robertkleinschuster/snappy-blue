import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
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
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="noindex, nofollow" name="robots" />
        <meta
          content="width=device-width, height=device-height, viewport-fit=cover, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no"
          name="viewport"
        />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <link href="manifest.webmanifest" rel="manifest" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider className="flex flex-col h-full">
          <div className="flex-grow">
            <Outlet />
          </div>
          <Tabs
            className="h-20 bg-default-100"
            defaultSelectedKey={location.pathname}
            fullWidth
            onSelectionChange={(key) => { navigate(key as string); }}
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
