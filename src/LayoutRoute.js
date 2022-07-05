import React from 'react';
import { Route } from 'react-router-dom';
import MUIHeader from './MUIHeader';

function LayoutRoute(props) {
    return (
        <React.Fragment>
            <MUIHeader />
            <Route path={props.path} exact={props.exact} component={props.component} />

        </React.Fragment>
    )
};

export default LayoutRoute;