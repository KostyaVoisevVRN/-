import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/State.js";

let rerenderEntireTree = (state) => {
  console.log(store.getState(), "getState");
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        newsPage={store.getState().newsPage}
        dispatch={store.dispatch.bind(store)}
        newPostText={store.getState().profilePage.newPostText}
        window={store.getState().test.balasd.window}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscride(rerenderEntireTree);
