import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NameValidator } from "../utils/NameValidator.js";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const HandleNameChange = (e) => {
        const validatedValue = NameValidator(e.target.value);
        setName(validatedValue);
    }

    const Register = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3434/users', {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });

            navigate('/');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            } 
        }
    }

    return (
        <section className="hero has-background-white is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <div className="has-text-centered">
                                <img src='/icons/icons_register.png' width={60} />
                            </div>
                            <div class="has-text-centered mb-2">
                                <h1 class="subtitle is-1 has-text-black has-text-weight-semibold">Create Account</h1>
                            </div>

                            <div className="block has-text-centered">
                                Sign up to start booking your badminton court
                            </div>
                            <form onSubmit={Register}>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Full Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={ HandleNameChange } />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="columns field mt-2">
                                    <div className="column">
                                        <label className="label">Password</label>
                                        <div className="controls">
                                            <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="column">
                                        <label className="label">Confirm Password</label>
                                        <div className="controls">
                                            <input type="password" className="input" placeholder="******" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-2">
                                    <button className="button is-link is-fullwidth mb-2">Register</button>
                                    <div class="content has-text-centered is-size-7">
                                        Already have an account?
                                        <a class="has-text-link is-size-7" href="/"> Login</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;