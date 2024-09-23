import React, { useState } from 'react';
import InputText from '../components/login/InputText';
import ErrorText from '../components/login/ErrorText';
import CircularProgress from '@mui/material/CircularProgress';
import logo from '../assets/dd.png';
import AuthService from '../services/auth/auth_service';
import { jwtDecode } from "jwt-decode";

export function Login() {
    const INITIAL_LOGIN_OBJ = {
        password: "",
        username: ""
    };

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

    const submitForm = (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (loginObj.username.trim() === "") return setErrorMessage("Username is required");
        if (loginObj.password.trim() === "") return setErrorMessage("Password is required");
        setLoading(true);

        AuthService.login(loginObj).then((res)=>{
            console.log(res);

            if(res.data.success === true) {
                var token = res.data.token;
                const decoded = jwtDecode(token);
                console.log(decoded);
                
                sessionStorage.setItem('exp', decoded.exp);
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('vrb', 1);
                sessionStorage.setItem('username', decoded.username);

                setTimeout(() => {
                    sessionStorage.setItem("v1", "T");
                    window.location.reload(); 
                    setLoading(false);
                }, 3000);
            } else {
                setTimeout(() => {
                    setErrorMessage(res.data.message);
                    setLoading(false);
                }, 3000);
            }
        }).catch((error) => {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid credentials try again');
            } else {
                setErrorMessage(error.message);
            }
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        });
    };

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("");
        setLoginObj({ ...loginObj, [updateType]: value });
    };

    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">eVRB</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img" style={{ backgroundImage: `url(${logo})`, backgroundColor: '#ffffff',backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
                        
                                </div>
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                        <div style={{visibility: 'hidden'}} className="w-100">
                                            <p className="social-media d-flex justify-content-end">
                                                <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                                                <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                            </p>
                                        </div>
                                    </div>
                                    <form onSubmit={(e) => submitForm(e)} className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">Username</label>
                                            <InputText type="username" defaultValue={loginObj.username} updateType="username" updateFormValue={updateFormValue} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="password">Password</label>
                                            <InputText defaultValue={loginObj.password} type="password" updateType="password" updateFormValue={updateFormValue} />
                                        </div>
                                        <div className="form-group">
                                            <ErrorText styleClass="mb-3 text-danger">{errorMessage}</ErrorText>
                                            <button
                                                style={{ fontSize: '18px', width: loading ? '100%' : '100%' }}
                                                type="submit"
                                                className="btnn btn-primary p-3"
                                            >
                                                {loading ? (
                                                    <>
                                                        <CircularProgress size={24} color="inherit" style={{ verticalAlign: 'middle' }} />
                                                        <span className="ms-2 mb-1 ml-2">Connecting...</span>
                                                    </>
                                                ) : (
                                                    'Sign In'
                                                )}
                                            </button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50 text-left">
                                                <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#">Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
