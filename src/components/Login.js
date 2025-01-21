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
import "@coreui/coreui/dist/css/coreui.min.css"; // CoreUI styles

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Logging in with:", { username, password });
    };

    return (
        <CContainer className="mt-5">
            <CRow className="justify-content-center">
                <CCol md={6}>
                    <CCard>
                        <CCardBody>
                            <h3>Login</h3>
                            <CForm onSubmit={handleSubmit}>
                                <CFormLabel htmlFor="username">Username</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                />
                                <CButton color="primary" type="submit" className="mt-3">
                                    Login
                                </CButton>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Login;
