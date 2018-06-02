import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

const routes = (
    <Switch>
        <Route exact path ='/' component={Auth}/>
        <Route path ='/dashboard' component={Dashboard}/>
        <Route path = '/post:postid' component={Post}/>
        <Route path = '/new' component={Form}/>
    </Switch>
);

export default routes;