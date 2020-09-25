import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Alert from "./Components/Alert/Alert";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
      <AlertState>
          <BrowserRouter>
              <Navbar />
              <div className="container mt-4">
                  <Alert />
                  <Switch>
                      <Route path={'/'} exact component={Home}/>
                      <Route path={'/about'} component={About}/>
                  </Switch>
              </div>
          </BrowserRouter>
      </AlertState>
  );
}

export default App;
