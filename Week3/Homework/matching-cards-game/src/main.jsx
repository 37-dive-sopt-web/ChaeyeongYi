import { Global } from "@emotion/react";
import { createRoot } from "react-dom/client";
import { ResetStyles } from "./styles/reset.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Global styles={ResetStyles} />
    <App />
  </>
);
