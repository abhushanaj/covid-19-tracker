import React from "react";
import {Switch,Route} from "react-router-dom";

/* Styling */
import "./App.scss";

/* Pages */
import HomePage from "./pages/HomePage/homepage.component";
import AppPage from "./pages/AppPage/apppage.component";

/* Components */
import Navbar from "./components/Navbar/navbar.component";


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/tracker" component={AppPage}/>
    </Switch>
    </>
  );
}

export default App;
