import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <div className="container mt-4">
              <Switch>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/about'} component={About}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
