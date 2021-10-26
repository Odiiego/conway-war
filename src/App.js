import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Game from "./pages/Game";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Conway's Game of Life - PVP Version!</h1>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
