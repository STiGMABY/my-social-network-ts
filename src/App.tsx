import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {UsersList} from "./Components/UserList/UsersList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Registration} from "./Components/Registration/Registration";
import {LoginReduxForm} from "./Components/Login/Login";

const App = () => (
    <BrowserRouter>
        <div>
            <div className={s.gridContainer}>
                <Header/>
                <Nav/>
                <div>
                    <Switch>
                        <Route exact path={'/main-page/:userId?'} render={() => <Main/>}/>
                        <Route path={'/users-list'} render={() => <UsersList/>}/>
                        <Route path={'/registration'} render={() => <Registration/>}/>
                        <Route path={'/login'} render={() => <LoginReduxForm/>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </div>
    </BrowserRouter>
);

export default App;
