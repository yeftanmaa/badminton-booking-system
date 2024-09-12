import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { MonthToStringConverter } from '../utils/MonthToStringConverter.js';
import { DaysLeftCounter } from '../utils/DaysLeftCounter.js';
import Sidebar from './Sidebar';
import '../css/CustomDashboard.css';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [currentUserReservations, setCurrentUserReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        RefreshToken();
        GetUsers();
        GetCurrentUserReservations();
    }, []);

    const GetCurrentUserReservations = async () => {
        const response = await axios.get('http://localhost:3434/userReservations/' + localStorage.currentUserId);
        setCurrentUserReservations(response.data);
    }

    const RefreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:3434/token');
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate('/');
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:3434/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const GetUsers = async () => {
        const response = await axiosJWT.get('http://localhost:3434/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        <div className="container columns is-fullheight p-5">
            <Sidebar />

            <div className="column menu">
                <h1 className="is-size-2 mb-5">Hey, {name}!</h1>

                { currentUserReservations.map((userReservation) => (
                    
                    <article className="box message is-white is-shadowless custom-border-dashed">
                        <div className="message-header pt-0 px-1">
                            <p className='is-size-4'>Detail Reservasi</p>
                            <div>
                                <span className="tag is-link is-light is-medium is-rounded p-4">
                                    <span className="custom-dot-future-identifier"></span>

                                    { DaysLeftCounter(new Date(userReservation.booking_data.booking_date)) < 0 ? 'Selesai' : DaysLeftCounter(new Date(userReservation.booking_data.booking_date)) === 0 ? 'Hari ini' : DaysLeftCounter(new Date(userReservation.booking_data.booking_date)) + ' hari lagi' }
                                
                                </span>
                            </div>
                        </div>
    
                        <div className="message-body custom-border-radius">
                            <div className="smart-grid">
                                <div className="grid custom-grid-maxWidth">
                                    <div className="cell">Nama Lengkap:</div>
                                    <div className="cell"><code className="tag is-size-7">{userReservation.booking_data.full_name}</code></div>
                                    
                                    <div className="cell">Nomor Lapangan:</div>
                                    <div className="cell"><code className="tag is-size-7">{userReservation.booking_data.court_no}</code></div>
                                    
                                    <div className="cell">Durasi:</div>
                                    <div className="cell"><code className="tag is-size-7">{userReservation.booking_data.duration} jam</code></div>
                                    
                                    <div className="cell">Tanggal Pemesanan:</div>
                                    <div className="cell">
                                        <code className="tag is-size-7">{
                                            userReservation.booking_data.booking_date.split('-')[2] + ' ' + MonthToStringConverter(userReservation.booking_data.booking_date.split('-')[1]) + ' ' + userReservation.booking_data.booking_date.split('-')[0]}
                                        </code>
                                    </div>
                                    
                                    <div className="cell">Waktu Mulai:</div>
                                    <div className="cell"><code className="tag is-size-7">{userReservation.booking_data.time_start} WIB</code></div>
                                    
                                    <div className="cell">Waktu Selesai:</div>
                                    <div className="cell"><code className="tag is-size-7">{userReservation.booking_data.time_end} WIB</code></div>
                                </div>
                            </div>
                        </div>
    
                        <div className="message-footer pt-5 is-flex is-justify-content-space-between">
                            <div className="left-icons-group">
                                <a href='#'>
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                </a>
    
                                <a href='#'>
                                    <span className="icon">
                                        <i className="fa-solid fa-share"></i>
                                    </span>
                                </a>
    
                                <a href='#'>
                                    <span className="icon">
                                        <i className="fa-solid fa-calendar-day"></i>
                                    </span>
                                </a>
                            </div>
    
                            <a href='#'>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-solid fa-ban"></i>
                                    </span>
                                    <span>Ajukan Pembatalan</span>
                                </span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
