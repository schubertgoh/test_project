import React, { Component } from "react";
import "./index.css";
import CustomInput from "../components/CustomInput";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Login() {
    // let state = {
    //     email: "",
    //     password: ""
    // };

    const handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    };

    const navigate = useNavigate();

    const login = () => {
        navigate('/home');
    }


    return (
        <div className="Login">
            <form className="form">
                <h2 className="login">Login</h2>
                <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    // handleChange={handleChange}
                    type="text"
                />
                <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                        fullWidth: true
                    }}
                    // handleChange={this.handleChange}
                    type="password"
                />

                <Button variant="contained" className="form__custom-button" onClick={login}>
                    Log in
                </Button>
            </form>
        </div>
    );

}

export default Login
