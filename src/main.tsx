import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={createTheme({palette:{primary: {main: "#706975"}}})}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
