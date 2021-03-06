import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'
import classes from './style.module.css'

const App = () => {
    return (
        <>
            <header className={classes.App}>head</header>
            <p>テスト</p>
            <AuthProvider>
                <Router>
                    <Switch>
                        <LoggedInRoute exact path='/' component={Room} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/SignUp' component={SignUp} />
                    </Switch>
                </Router>
            </AuthProvider>
            <footer className={classes.App}>footer</footer>
        </>
    )
}

export default App