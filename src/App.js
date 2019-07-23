import React from 'react';
import {Route,Switch} from 'react-router-dom';
import  Homeage  from './pages/HomePage';
import UserPage from './pages/UserPage';


export default function App()
{
    return(
        <Switch>
            <Route exact path="/" component={ Homeage } />
            <Route path='/:id' component = { UserPage} />
        </Switch>

    )
}

