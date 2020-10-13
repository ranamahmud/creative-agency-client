import React, { useContext } from 'react';
import { Container, Form, Image, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (

        <Container>
            <Row id="login-logo">
                <Image src={require('../../../../images/logos/logo.png')} />
            </Row>
            <Row id="login-form">
                <Form >

                    <div id="login-form-item">
                        <p>
                            Login with
    </p>
                        <button variant="light" type="button" onClick={handleGoogleSignIn}>
                            <img src={require('../../../../images/logos/google_short.png')} alt="" />
                            Continue with Google
  </button>
                        <h1>Don’t have an account? Create an account</h1>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default Login;