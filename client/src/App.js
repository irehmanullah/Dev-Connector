import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import { loadUser } from "./actions/auth";
import "./App.css";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import Main from "./Main";

const firebaseConfig = require("./firebasekey.json");
const fireBaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireBaseApp);

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    logEvent(analytics, "userVisited");
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
