import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";

import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import {
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const purple: MantineColorsTuple = [
  "#f5f1fe",
  "#e5e1ef",
  "#c8c2d9",
  "#aaa0c3",
  "#9083b0",
  "#8071a4",
  "#7868a0",
  "#66578c",
  "#5b4d7e",
  "#4e4170",
];

const theme = createTheme({
  colors: {
    purple,
    primary: purple,
  },
  fontFamily: "monospace",
});

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </StrictMode>
  );
}
