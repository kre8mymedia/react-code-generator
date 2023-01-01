import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import AppProvider from "./contexts/AppContext";
import GenerateProvider from "./contexts/GenerateContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <AppProvider>
      <GenerateProvider>
        <App />
      </GenerateProvider>
    </AppProvider>
  </StrictMode>
);
