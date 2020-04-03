import React from 'react';
import Form from '../components/form-validation/form';
import Calculator from '../components/calculator/calculator';
import { Switch, Route } from 'react-router-dom';

function MainRouter(props) {
    return (
        <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/registration" component={Form} />
            <Route path="/calculator" component={Calculator} />
        </Switch>
    )
}

export default MainRouter;