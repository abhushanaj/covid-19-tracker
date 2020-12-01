import React from "react";
import {Switch,Route} from "react-router-dom";

/* Styling */
import "./App.scss";

/* Pages */
import HomePage from "./pages/HomePage/homepage.component";
import AppPage from "./pages/AppPage/apppage.component";


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/app" component={AppPage}/>
    </Switch>
    </>
  );
}

export default App;
