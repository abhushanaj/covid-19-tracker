import React from "react";
import {Switch,Route} from "react-router-dom";

/* Styling */
import "./App.scss";

/* Pages */
import HomePage from "./pages/HomePage/homepage.component";
import TrackerPage from "./pages/TrackerPage/trackerpage.component";
import HelpPage from "./pages/HelpPage/helpPage.component";


/* Components */
import Navbar from "./components/Navbar/navbar.component";


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/tracker" component={TrackerPage}/>
      <Route exact path="/help" component={HelpPage}/>
    </Switch>
    </>
  );
}

export default App;
