import React, { useEffect } from "react";
import { Provider } from "react-redux";

import { loadUser } from "./actions/auth";
import "./App.css";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import Main from './Main'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
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
