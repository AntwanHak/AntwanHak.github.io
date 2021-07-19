import React, { useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Ingredients from "./Ingredients";
import Recipes from "./Recipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <div className="instarecipeapp container">
      <div className="menu-active navigation-menu">
        <NavBar
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
      </div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home language={language} />}
          />
          <Route
            path="/ingredients"
            exact
            component={() => <Ingredients language={language} />}
          />

          <Route
            path="/recipes"
            exact
            component={() => <Recipes language={language} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
export default App;
