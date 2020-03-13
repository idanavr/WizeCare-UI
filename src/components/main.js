import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './main.scss';
import Register from './register/register';

class Main extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="*" component={Register} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;