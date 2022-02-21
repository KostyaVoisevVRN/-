import React from "react";
import "./App.css";
import Header from "./component/Header/Header.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Profile from "./component/Profile/Profile.jsx";
import Dialogs from "./component/Dialogs/Dialogs.jsx";
import News from "./component/Navbar/News.jsx";
import Music from "./component/Navbar/Music.jsx";
import Settings from "./component/Navbar/Settings.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  console.log(props.state, "props.state");
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogsData={props.state.dialogPage.dialogs} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  postData={props.state.profilePage.posts}
                  dispatch={props.dispatch}
                  newPostText={props.newPostText}
                  window={props.window}
                />
              }
            />

            <Route path="/news" element={<News newsPage={props.newsPage} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
