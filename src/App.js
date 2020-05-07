import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/common/Navbar";
import Customers from "./components/Customers";
import Rental from "./components/Rental";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import LoginForm from "./components/authentication/LoginForm";
import RegistrationForm from "./components/authentication/RegistrationForm";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main role="main" className="container pt-5">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
