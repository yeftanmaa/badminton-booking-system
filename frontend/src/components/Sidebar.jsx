import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const navigate = useNavigate();

    const GetCurrentUsersInformation = async () => {
        
        try {
            const response = await axios.get(`http://localhost:3434/users/${localStorage.currentUserId}`);
            localStorage.setItem('CurrentUsersInformation', JSON.stringify(response.data));

            navigate(`/settings/${response.data.id}`);
        } catch (error) {
            console.error(error);
            navigate('/');
        }
    }

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:3434/logout');
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <aside className="column is-2 menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
                <li className="mb-2">
                    <a href='/dashboard' className="has-background-light has-text-link">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-user"></i>
                            </span>
                            <span>Dashboard</span>
                        </span>
                    </a>
                </li>

                <li>
                    <a className="has-background-light has-text-link">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-calendar-alt"></i>
                            </span>
                            <span>Pesan Lapangan</span>
                        </span>
                    </a>
                </li>
            </ul>
            <p className="menu-label">Administrasi</p>
            <ul className="menu-list">
                <li>
                    <a href='/payment-method' className="has-background-light has-text-link">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-money-bill"></i>
                            </span>
                            <span>Pembayaran</span>
                        </span>
                    </a>
                </li>
            </ul>
            <p className="menu-label">Konfigurasi</p>
            <ul className="menu-list">
                <li className="mb-2">
                    <a className="has-background-light has-text-link" onClick={GetCurrentUsersInformation}>
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-gear"></i>
                            </span>
                            <span>Pengaturan</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a onClick={ Logout } className="has-background-light has-text-danger">
                    <span className="icon-text">
                        <span className="icon">
                            <i className="fas fa-sign-out-alt"></i>
                        </span>
                        <span>Keluar</span>
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;