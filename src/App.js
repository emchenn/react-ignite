import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
// Components and pages
import Home from "./pages/home";
import Nav from "./components/nav";

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
}

export default App;
