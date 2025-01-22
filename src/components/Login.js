import React, { useState } from "react";
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CForm,
    CFormInput,
    CFormLabel,
    CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../styles/Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Logging in with:", { username, password });
    };

    return (
        <CContainer className="auth-container mt-5">
            <CRow className="justify-content-center">
                <CCol md={6}>
                    <CCard className="auth-card">
                        <CCardBody>
                            <h3 className="auth-title">Login to Sales Portal</h3>
                            <CForm onSubmit={handleSubmit}>
                                <CFormLabel htmlFor="username">Username</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <CFormLabel htmlFor="password" className="mt-3">
                                    Password
                                </CFormLabel>
                                <CFormInput
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <CButton color="primary" type="submit" className="mt-4 w-100">
                                    Login
                                </CButton>
                            </CForm>

                            <div className="auth-links mt-4 text-center">
                                <p>
                                    Forgot your password?{" "}
                                    <a href="/forgot-password" className="auth-link">
                                        Reset it
                                    </a>
                                </p>
                                <p>
                                    Don't have an account?{" "}
                                    <a href="/signup" className="auth-link">
                                        Sign Up
                                    </a>
                                </p>
                            </div>

                            <div className="third-party-login mt-4">
                                <h6 className="text-center">Or log in with</h6>
                                <div className="third-party-buttons d-flex justify-content-between mt-2">
                                    <CButton color="light" className="w-100 mx-1">
                                        <i className="bi bi-google"></i> Google
                                    </CButton>
                                    <CButton color="light" className="w-100 mx-1">
                                        <i className="bi bi-facebook"></i> Facebook
                                    </CButton>
                                    <CButton color="light" className="w-100 mx-1">
                                        <i className="bi bi-github"></i> GitHub
                                    </CButton>
                                </div>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Login;
