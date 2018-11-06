import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import routesConfig from './routes/index.js';
import Navigation from './components/Navigation';
import styles from './App.module.scss';

const routes = routesConfig.routes.map(({id, path, component, exact}) => (
    <Route
        key={id}
        path={path}
        component={component}
        exact = {exact}
    />
));

const redirect = routesConfig.redirect.map(({id, from, to, exact}) => (
    <Redirect
        key={id}
        from={from}
        to={to}
        exact={exact}
    />
));


const App = () => (
  <div className={styles.container}>
    <Navigation />
    <Switch>
        {routes}
        {redirect}
    </Switch>
  </div>
);


export default App;