import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3434/login', {
                email: email,
                password: password
            });

            const currentUserId = response.data.userId;
            localStorage.setItem('currentUserId', currentUserId);
            localStorage.setItem('authToken', 'loggedIn');

            console.log(localStorage.currentUserId);
            navigate('/dashboard');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section
            className="columns m-0"
            style={{
                height: '100vh'
             }}
        >    

            <div
                className="box m-5 column is-two-third"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/badminton_bg.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            </div>

            <div className="column p-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="has-text-left">
                    <img src='/icons/icon_waving-hand.png' width={40} />
                </div>
                <div className="has-text-left mb-4">
                    <h1 className="subtitle is-2 has-text-black has-text-weight-semibold">Halo, Admin!</h1>
                </div>
                
                <form onSubmit={Auth}>
                    <article className={msg == '' ? "" : "message is-danger"}>
                        <div className={msg == '' ? "" : "message-body"}>{msg}</div>
                    </article>
                    <div className="field mt-5">
                        <label className="label">E-mail</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="john.doe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Kata Sandi</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="content is-size-7 mt-2 is-flex is-justify-content-space-between">
                            <label className="is-flex checkbox is-align-content-center is-align-items-center">
                                <input className="mr-1" type="checkbox"  />
                                Tetap masuk di perangkat ini
                            </label>
                            <a className="has-text-grey-darker is-size-7 is-underlined" href="/resetPassword">Lupa Kata Sandi</a>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-link is-fullwidth mb-2">Masuk</button>
                    </div>
                </form>
            </div>
            {/* <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <div className="has-text-centered">
                                <img src='/icons/icon_waving-hand.png' width={50} />
                            </div>
                            <div className="has-text-centered mb-4">
                                <h1 className="subtitle is-1 has-text-black has-text-weight-semibold">Halo, Admin!</h1>
                            </div>
                            
                            <form onSubmit={Auth}>
                                <article className={msg == '' ? "" : "message is-danger"}>
                                    <div className={msg == '' ? "" : "message-body"}>{msg}</div>
                                </article>
                                <div className="field mt-5">
                                    <label className="label">E-mail</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="john.doe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Kata Sandi</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="content is-size-7 mt-2 is-flex is-justify-content-space-between">
                                        <label className="is-flex checkbox is-align-content-center is-align-items-center">
                                            <input className="mr-1" type="checkbox"  />
                                            Tetap masuk di perangkat ini
                                        </label>
                                        <a className="has-text-grey-darker is-size-7 is-underlined" href="/resetPassword">Lupa Kata Sandi</a>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-link is-fullwidth mb-2">Masuk</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
 
export default LoginAdmin;