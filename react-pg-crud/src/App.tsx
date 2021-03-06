import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./layout";
import { About, Home } from "./pages";
import { Provider as DataProvider } from "./context/DataProvider";

function App() {
  return (
    <div id="App">
      <Router>
        <DataProvider>
          <Navbar
            links={[
              {
                name: "Home",
                path: "/",
              },
              {
                name: "About",
                path: "/about",
              },
              {
                name: "React-pg-crud",
                path: "/",
                brand: true,
              },
            ]}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
