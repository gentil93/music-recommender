import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Main from '../Components/main'

export default props => (
    <Router history={hashHistory}>
        <Route path='/main' component={Main} />
        <Route path='/home' component={Main} />
        <Redirect from='*' to='/main' />
    </Router>
)