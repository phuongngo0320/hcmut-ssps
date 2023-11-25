import React, { useState } from "react";
import "./../styles/login.css";
import submitForm from "../helpers/submit";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        let errors = 0;
        if (username.length <= 0) {
            setUsernameError("Please enter an username");
            errors++;
        }

        if (password.length <= 0) {
            setPasswordError("Please enter a password");
            errors++;
        }

        if (errors) {
            return;
        }

        submitForm({
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <main className="ssoLogin">
            <form onSubmit={handleSubmit} className="ssoLoginForm">
                <div className="field">
                    <label for="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <small className="error">{usernameError}</small>
                </div>
                <div className="field">
                    <label for="pwd">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="pwd"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <small className="error">{passwordError}</small>
                </div>
                <div className="btn">
                    <input type="submit" value="Submit"/>
                    <input type="reset" value="Clear"/>
                </div>
            </form>
        </main>
    );
}