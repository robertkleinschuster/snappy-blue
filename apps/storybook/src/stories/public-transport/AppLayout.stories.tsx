import { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "@nextui-org/react";
import { Outlet, RouterProvider, createMemoryRouter, useNavigate } from "react-router-dom";
import {SearchBar} from "ui-public-transport/src";

const router = createMemoryRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "favorites",
          element: <Favorites/>,
        },
        {
          path: "trains",
          element: <Trains/>,
        },
        {
          path: "departures",
          element: <Departures/>,
        },
      ],
    },
  ],
  {}
);

function Favorites(): React.JSX.Element {
  return <>
    <h1>Favorites</h1>
  </>
}

function Trains(): React.JSX.Element {
  return <>
    <SearchBar/>
    <h1>Trains</h1>
  </>
}

function Departures(): React.JSX.Element {
  return <>
    <SearchBar/>
    <h1>Departures</h1>
  </>
}

function AppLayout() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Tabs onSelectionChange={(key) => navigate(key as string)} fullWidth radius="none" size="lg">
        <Tab key="favorites" title="Favorites"></Tab>
        <Tab key="trains" title="Trains"></Tab>
        <Tab key="departures" title="Departures"></Tab>
      </Tabs>
    </div>
  );
}

function App(): React.JSX.Element {
  return <RouterProvider router={router}/>
}

export default {
  title: "PublicTransport/AppLayout",
  component: App,
  parameters: {
    layout: 'fullscreen'
  },
} satisfies Meta;

export const Primary: StoryObj = {};
