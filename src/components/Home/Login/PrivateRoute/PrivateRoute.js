import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const PrivateRoute = ({ component: Children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        (loggedInUser && loggedInUser.email) ? (
          <Children {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;