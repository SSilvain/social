import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer1 from "./components/Users/UsersContainer1";
import Helmet from "react-helmet";

function App() {
    let TITLE = "APP PAGE";
    return (
        <div className="app-wrapper">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />
            <Navbar />
            <div className="content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route
                    path="/users"
                    render={() => <UsersContainer1 />}
                    title="Users Page Title"
                />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
}

export default App;
