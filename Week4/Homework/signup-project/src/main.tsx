import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ResetStyles } from "./styles/reset.ts";
import App from "./App.tsx";
import { Global } from "@emotion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={ResetStyles} />
    <App />
  </StrictMode>
);
