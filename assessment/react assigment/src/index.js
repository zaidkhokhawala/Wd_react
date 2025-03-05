import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChecklistProvider } from "./ChecklistContext"; // Importing the Provider

ReactDOM.render(
  <React.StrictMode>
    <ChecklistProvider> {/* Wrapping App inside Provider */}
      <App />
    </ChecklistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
