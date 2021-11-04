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
          <Route component={Homepage} path="/" exact></Route>
          <Route component={Game} path="/game"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
