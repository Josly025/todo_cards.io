import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Todos from "./Pages/Todos";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/todos" exact component={Todos} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
