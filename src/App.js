import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
