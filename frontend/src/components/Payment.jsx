import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import '../customstyle.css';

const Payment = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    
    return (
        <div className="container columns is-fullheight p-5">
            <Sidebar />

            <div className="column">
                <div>
                    <h1 className="is-size-2 pb-4 mb-5 has-text-weight-semibold" style={{ borderBottom: '1px solid rgba(0,0,0,0.10)'}}>Pembayaran</h1>
                </div>

                <div className="tabs is-centered px-5 is-toggle is-medium">
                    <ul>
                        <li className={activeTab === 'tab1' ? 'is-active ' : ''}>
                            <a onClick={() => setActiveTab('tab1')}>
                                <span className="icon is-medium m-0"><img src='/logos/logo-dana-thumbnail.png' /></span>
                                <span className="icon is-medium m-0"><img src='/logos/logo-gopay-thumbnail.png' /></span>
                                <span className="icon is-medium m-0 mr-1"><img src='/logos/logo-ovo-thumbnail.png' /></span>
                                E-Wallets
                            </a>
                        </li>
                        
                        <li className={activeTab === 'tab2' ? 'is-active' : ''}>
                            <a onClick={() => setActiveTab('tab2')}>
                                <span className="icon is-medium ml-0 mr-1"><img src='/logos/logo-bca-thumbnail.png' /></span>
                                BCA Virtual Account
                            </a>
                        </li>
                        
                        <li className={activeTab === 'tab3' ? 'is-active' : ''}>
                            <a onClick={() => setActiveTab('tab3')}>
                                <span className="icon is-medium ml-0 mr-1"><img src='/logos/logo-livin-mandiri-thumbnail.png' /></span>
                                Livin Mandiri
                            </a>
                        </li>

                        <li className={activeTab === 'tab4' ? 'is-active' : ''}>
                            <a onClick={() => setActiveTab('tab4')}>
                                <span className="icon is-medium p-2">Lainnya</span>
                                
                            </a>
                        </li>
                    </ul>

                </div>

                {/* E-Wallets */}
                <div className="p-2 mt-4">
                    { activeTab === 'tab1' && 
                        <div className="box">
                            <div className="dana">
                                <figure className="image mt-2 mb-3" style={{ width: '6rem' }}>
                                    <img src="/logos/logo-dana.png" />
                                </figure>

                                <p className="mb-0">Nomor Rekening:</p>

                                <div className="is-flex is-align-items-center">
                                    <p className="is-size-4 m-0 mr-3 has-text-weight-medium">125882033814</p>

                                    <button className="button is-small">
                                        <span className="icon is-small">
                                            <i className="fa-regular fa-copy"></i>
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-5">
                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2">
                                            <img src="/icons/num-first.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center">
                                            <p>Buka Aplikasi DANA</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-second.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Pilih <b>"Kirim"</b> dan pilih <b>"Rekening Bank"</b></p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-third.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>Informasi Bank dan Nomor Rekening</b> yang tertera di atas</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-fourth.png" width={20}/>
                                        </div>
                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>jumlah uang</b> yang akan ditransfer</p>
                                        </div>
                                    </div>


                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-fifth.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Konfirmasi detail transfer</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-sixth.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>PIN DANA</b> untuk menyelesaikan transaksi</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-seventh.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Transfer selesai</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{height: '2px', borderBottom: '1px solid rgba(0,0,0,0.10)', marginTop: '2rem', marginBottom: '2rem'}}></div>

                            <div className="gopay">
                                <figure className="image mt-2 mb-3" style={{ width: '7rem' }}>
                                    <img src="/logos/logo-gopay.png" />
                                </figure>

                                <p className="mb-0">Nomor Rekening:</p>

                                <div className="is-flex is-align-items-center">
                                    <p className="is-size-4 m-0 mr-3 has-text-weight-medium">22881467176</p>

                                    <button className="button is-small">
                                        <span className="icon is-small">
                                            <i className="fa-regular fa-copy"></i>
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-5">
                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2">
                                            <img src="/icons/num-first.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center">
                                            <p>Buka Aplikasi Gojek</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-second.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Pilih <b>"Bayar"</b> dan pilih <b>"Rekening Bank"</b></p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-third.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Pilih <b>Bank Tujuan</b> dan masukkan <b>Nomor Rekening</b> yang tertera di atas</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-fourth.png" width={20}/>
                                        </div>
                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>jumlah uang</b> yang akan ditransfer</p>
                                        </div>
                                    </div>


                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-fifth.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Konfirmasi detail transfer</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-sixth.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>PIN GoPay</b> untuk menyelesaikan transaksi</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-seventh.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Transfer selesai</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{height: '2px', borderBottom: '1px solid rgba(0,0,0,0.10)', marginTop: '2rem', marginBottom: '2rem'}}></div>

                            <div className="ovo">
                                <figure className="image mt-2 mb-3" style={{ width: '4rem' }}>
                                    <img src="/logos/logo-ovo.png" />
                                </figure>

                                <p className="mb-0">Nomor Rekening:</p>

                                <div className="is-flex is-align-items-center">
                                    <p className="is-size-4 m-0 mr-3 has-text-weight-medium">22903848271</p>

                                    <button className="button is-small">
                                        <span className="icon is-small">
                                            <i className="fa-regular fa-copy"></i>
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-5">
                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2">
                                            <img src="/icons/num-first.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center">
                                            <p>Buka Aplikasi OVO</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-second.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Pilih <b>"Transfer"</b> dan pilih <b>"Rekening Bank"</b></p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-third.png" width={20} />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Pilih <b>Bank Tujuan</b> dan masukkan <b>Nomor Rekening</b> yang tertera di atas</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-fourth.png" width={20}/>
                                        </div>
                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>jumlah uang</b> yang akan ditransfer</p>
                                        </div>
                                    </div>


                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-fifth.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Konfirmasi detail transfer</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-sixth.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Masukkan <b>PIN OVO</b> untuk menyelesaikan transaksi</p>
                                        </div>
                                    </div>

                                    <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                        <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                            <img src="/icons/num-seventh.png" width={20}  />
                                        </div>

                                        <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                            <p>Transfer selesai</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    }
                    
                    {/* BCA Virtual Account */}
                    { activeTab === 'tab2' &&
                        
                        <div className="box">
                            <figure className="image mt-2 mb-3" style={{ width: '5rem' }}>
                                <img src="/logos/logo-bca.png" />
                            </figure>

                            <p className="mb-0">Nomor Virtual Account BCA:</p>

                            <div className="is-flex is-align-items-center">
                                <p className="is-size-4 m-0 mr-3 has-text-weight-medium">702911384022</p>

                                <button className="button is-small">
                                    <span className="icon is-small">
                                        <i className="fa-regular fa-copy"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="mt-5">
                                
                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2">
                                        <img src="/icons/num-first.png" width={20} />
                                    </div>

                                    <div className="is-flex is-align-items-center">
                                        <p>Masuk ke aplikasi <b>M-BCA</b></p>
                                    </div>
                                </div>

                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-second.png" width={20} />
                                    </div>

                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Pilih menu <b>M-Transfer</b></p>
                                    </div>
                                </div>

                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-third.png" width={20} />
                                    </div>

                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Pilih <b>BCA Virtual Account</b></p>
                                    </div>
                                </div>

                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-fourth.png" width={20}/>
                                    </div>
                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Masukkan Nomor BCA Virtual Account diatas, lalu pilih "OK"</p>
                                    </div>
                                </div>


                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-fifth.png" width={20}  />
                                    </div>

                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Masukkan nominal transfer, lalu pilih "OK"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    
                    {/* Livin Mandiri */}
                    { activeTab === 'tab3' &&
                        <div className="box">
                            <figure className="image mt-2 mb-3" style={{ width: '5rem' }}>
                                <img src="/logos/logo-livin-mandiri.png" />
                            </figure>

                            <p className="mb-0">Nomor Rekening Bank Mandiri:</p>

                            <div className="is-flex is-align-items-center">
                                <p className="is-size-4 m-0 mr-3 has-text-weight-medium">111-33-0927425-9</p>

                                <button className="button is-small">
                                    <span className="icon is-small">
                                        <i className="fa-regular fa-copy"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="mt-5">
                                
                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2">
                                        <img src="/icons/num-first.png" width={20} />
                                    </div>

                                    <div className="is-flex is-align-items-center">
                                        <p>Pilih <b>Transfer ke Tujuan Baru</b></p>
                                    </div>
                                </div>

                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-second.png" width={20} />
                                    </div>

                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Masukan Nama Tujuan <b>Bank Mandiri</b> dan <b>No Rekening</b> kemudian tap <b>Lanjutkan</b></p>
                                    </div>
                                </div>

                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-third.png" width={20} />
                                    </div>

                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Masukkan Nominal Transfer</p>
                                    </div>
                                </div>

                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-fourth.png" width={20}/>
                                    </div>
                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Masukan <b>PIN Livin'</b></p>
                                    </div>
                                </div>


                                <div className="is-flex is-justify-content-flex-start is-align-items-center mb-2">
                                    <div className="is-flex is-align-items-center mr-2 is-flex-shrink-0">
                                        <img src="/icons/num-fifth.png" width={20}  />
                                    </div>

                                    <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                                        <p>Transfer berhasil. <i>Swipe up</i> untuk melihat resi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {/* Lainnya */}
                    { activeTab === 'tab4' &&
                        <div className="box">
                            Anda juga dapat melakukan pembayaran untuk lapangan yang telah dipesan dengan <b>datang langsung</b> ke GOR kami dan <b>mengunjungi kasir</b>.
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Payment;