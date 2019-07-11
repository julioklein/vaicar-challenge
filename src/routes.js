import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Portuguese/Home/Home'
import Auth from './components/Portuguese/Auth/Auth'
import Dashboard from './components/Portuguese/Dashboard/Dashboard'
import HomeEnUs from './components/English/HomeEnUs/HomeEnUs'
import AuthEnUs from './components/English/AuthEnUs/AuthEnUs'
import DashboardEnUs from './components/English/DashboardEnUs/DashboardEnUs'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/en' component={HomeEnUs} />
            <Route exact path='/en/auth' component={AuthEnUs} />
            <Route exact path='/en/dashboard' component={DashboardEnUs} />
        </Switch>
    </BrowserRouter>
)

export default Routes