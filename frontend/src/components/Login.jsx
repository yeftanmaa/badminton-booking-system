import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3434/login', {
                email: email,
                password: password
            });
            navigate('/dashboard');
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
                                <img src='/icons/icon_waving-hand.png' width={50} />
                            </div>
                            <div className="has-text-centered mb-4">
                                <h1 className="subtitle is-1 has-text-black has-text-weight-semibold">Sign in</h1>
                            </div>

                            <div className="block has-text-centered">
                                Welcome back! Please enter your email and password before do a booking.
                            </div>
                            <form onSubmit={Auth}>
                                <article className={msg == '' ? "" : "message is-danger"}>
                                    <div className={msg == '' ? "" : "message-body"}>{msg}</div>
                                </article>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="john.doe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="content is-size-7 mt-1">
                                        <a className="has-text-grey-darker is-size-7 is-underlined" href="/resetPassword">Forgot Password</a>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-link is-fullwidth mb-2">Login</button>
                                    <div className="content has-text-centered is-size-7">
                                        Don't have an account?
                                        <a className="has-text-link is-size-7" href="/register"> Register</a>
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
 
export default Login;