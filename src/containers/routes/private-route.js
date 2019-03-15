import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    component: Component,
    auth,
    ...rest
}) => {
    if (!auth.isActive) {
        return (
            <Route {...rest} render={props =>
                (auth.authenticated) ? (
                    <Component {...props}>{props.children}</Component>
                ) : (
                        <Redirect to="/auth" />
                    )
            }
            />
        )
    }

    return null;
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);