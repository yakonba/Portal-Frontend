import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LogList, LogDetail, Main, MainNow, MainThree } from '../scenes';
import { paths } from './paths';
import { PrivateRoute, MainLayout } from '../components';

const Routes: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Main} layout={MainLayout} />
                <PrivateRoute exact path="/main" component={MainNow} layout={MainLayout} />
                <PrivateRoute exact path="/mainthree" component={MainThree} layout={MainLayout} />
                <PrivateRoute exact path={paths.LOGLIST} component={LogList} layout={MainLayout} />
                <PrivateRoute
                    exact
                    path={paths.LOGDETAIL}
                    component={LogDetail}
                    layout={MainLayout}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
