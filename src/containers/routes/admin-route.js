import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({
    component: Component,
    auth,
    ...rest
}) => {
    if (!auth.isActive) {
        return (
            <Route {...rest} render={props => {
                if (auth.is.hasOwnProperty('administrator') && auth.is.administrator) {
                    return <Component {...props}>{props.children}</Component>;
                }

                if (auth.is.hasOwnProperty('authenticated') && auth.is.authenticated) {
                    return <Redirect to="/" />
                }

                return <Redirect to="/auth" />
            }} />
        )
    }

    return null;
};

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(AdminRoute);