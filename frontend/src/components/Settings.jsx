import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FullNameSeparator } from "../utils/FullNameSeparator.js";
import { NameValidator } from "../utils/NameValidator.js";

const Settings = () => {
    const navigate = useNavigate();

    const currentUserInfo = JSON.parse(localStorage.CurrentUsersInformation);
    
    // Trigger external function 'FullNameSeparator'
    const userFullName = FullNameSeparator(currentUserInfo.name);

    const [isAddUsernameClicked, setIsAddUsernameClicked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [IsConfirmPasswordDisabled, setIsConfirmPasswordDisabled] = useState(true);
    const [updatedFirstName, setUpdatedFirstName] = useState(userFullName[0]);
    const [updatedLastName, setUpdatedLastName] = useState(userFullName[1]);
    const [updatedEmail, setUpdatedEmail] = useState(currentUserInfo.email);
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [confirmUpdatedPassword, setConfirmUpdatedPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showMsg, setShowMsg] = useState(false);
    const [colorMsg, setColorMsg] = useState('');

    useEffect(() => {
        let timer;
        if (showMsg) {
          timer = setTimeout(() => {
            setShowMsg(false);
          }, 3000); // 3000 milliseconds = 3 seconds
        }
    
        // Cleanup timeout if the component unmounts or if showMsg changes before timeout
        return () => clearTimeout(timer);
    }, [showMsg]);

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:3434/logout');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    const UpdateUserInfo = async (e) => {
        e.preventDefault();
        
        const updateData = {
            name: updatedFirstName + " " + updatedLastName,
            email: updatedEmail
        };
        
        if (updatedPassword != '') {
            if (updatedPassword == confirmUpdatedPassword) {
                updateData.password = updatedPassword;
                updateData.confirmPassword = updatedPassword;
            } else {
                setMsg("Kata sandi dan konfirmasi kata sandi tidak sesuai!");
                setShowMsg(true);
                setColorMsg('is-danger');
                console.log(msg);
                return;
            }
        }

        if (updateData.password == undefined) {
            try {
                const response = await axios.patch(`http://localhost:3434/users/${localStorage.currentUserId}`, updateData);
                GetCurrentUsersInformation();
                setIsButtonDisabled(true);
                setMsg(response.data.msg);
                setShowMsg(true);
                setColorMsg('is-success');
                setUpdatedPassword('');
                setConfirmUpdatedPassword('');
    
                navigate(`/settings/${localStorage.currentUserId}`)
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                    setShowMsg(true);
                } 
            }
        } else {
            try {
                const response = await axios.patch(`http://localhost:3434/users/${localStorage.currentUserId}`, updateData);
                GetCurrentUsersInformation();
                setIsButtonDisabled(true);
                setMsg(response.data.msg);
                setShowMsg(true);
                setColorMsg('is-success');
                setUpdatedPassword('');
                setConfirmUpdatedPassword('');
    
                setTimeout(() => {
                    Logout();
                }, 2500);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                    setShowMsg(true);
                } 
            }
        }
    }

    const HandleNameChange = (e) => {
        const { name, value } = e.target;

        const validatedValue = NameValidator(value);
        
        if (name === "fname") {
            setUpdatedFirstName(validatedValue);
        } else if (name === "lname") {
            setUpdatedLastName(validatedValue);
        }

        setIsButtonDisabled(false);
    }

    return (
        <section className="container columns is-fullheight p-5">
            <Sidebar />

            <div className="container px-5">
                <div>                        
                    <h1 className="is-size-2 has-text-weight-semibold pb-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.10)'}}>Pengaturan</h1>
                </div>

                <div className={`notification ${colorMsg} is-light`} hidden={!showMsg}>
                    {msg}
                </div>

                <div className="block">
                    <form>
                        <fieldset>
                            <div>
                                { !isAddUsernameClicked && 
                                    <button className="button is-ghost mt-5 mb m-0 p-0" style={{ border: 'none' }} onClick={() => setIsAddUsernameClicked(true)}>
                                        <span className="icon is-small">
                                        <i className="fas fa-plus"></i>
                                        </span>
                                        <span>Tambah Nama Pengguna</span>
                                    </button>
                                }

                                { isAddUsernameClicked &&
                                    <div className="field">
                                        <label className="label">Username</label>
                                        <input className="input" type="text" name="username" placeholder="johndoe99" />
                                    </div>
                                }
                            </div>

                            <div className="columns mb-0 mt-2">
                                <div className="field column">
                                    <label className="label">Nama Depan</label>
                                    <input className="input" type="text" placeholder="John Doe" name="fname" value={updatedFirstName} onChange={HandleNameChange} />
                                </div>

                                <div className="field column">
                                    <label className="label">Nama Belakang</label>
                                    <input className="input" type="text" placeholder="John Doe" name="lname" value={updatedLastName} onChange={HandleNameChange} />
                                </div>
                            </div>

                            <div className="field mb-5">
                                <label className="label">Alamat Email</label>
                                <input className="input" type="email" placeholder="john@doe.com" name="email" value={updatedEmail} onChange={(e) => {
                                    setUpdatedEmail(e.target.value);
                                    setIsButtonDisabled(false);
                                }} />
                            </div>

                            <div className="columns mb-0">
                                <div className="field column">
                                    <label className="label">Kata Sandi Baru</label>
                                    <input className="input" type="password" name="new_password" placeholder="******************" value={updatedPassword} onChange={(e) => {
                                        setUpdatedPassword(e.target.value);
                                        setIsButtonDisabled(false);
                                        setIsConfirmPasswordDisabled(false);
                                    }} />
                                </div>

                                <div className="field column">
                                    <label className="label">Konfirmasi Kata Sandi Baru</label>
                                    <input className="input" type="password" name="confirm_new_password" placeholder="******************" value={confirmUpdatedPassword} onChange={(e) => setConfirmUpdatedPassword(e.target.value)} disabled={IsConfirmPasswordDisabled} />
                                </div>
                            </div>
                            
                            <div className="buttons is-flex">
                                <div>
                                    <button className="button is-success mr-2" onClick={UpdateUserInfo} disabled={isButtonDisabled}>Save changes</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </div>
        </section>
    );
}
 
export default Settings;