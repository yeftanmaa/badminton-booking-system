const ContactModal = ({ isActive, toggleModal }) => {
    return (
        <div id="modal" className={`modal ${isActive ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            
            <div className="modal-content">
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Formulir Pengaduan</p>
                            <button className="delete" aria-label="close" onClick={toggleModal}></button>
                        </header>

                        <section className="modal-card-body">

                            <div className="field mb-5">
                                <label className="label">Jenis Masalah</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option>Bantuan Umum</option>
                                            <option>Masalah Teknis</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="columns mb-0">
                                <div className="field column">
                                    <label className="label">Nama Depan</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="John" />
                                    </div>
                                </div>

                                <div className="field column">
                                    <label className="label">Nama Belakang</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Doe" />
                                    </div>
                                </div>
                            </div>

                            <div className="field mb-5">
                                <label className="label">Alamat Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" placeholder="john@doe.com" />
                                    
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>


                            <div className="field">
                                <label className="label">Pesan</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Textarea"></textarea>
                                </div>
                            </div>
                        </section>

                        <footer className="modal-card-foot">
                            <div className="buttons">
                                <button className="button is-link">Kirim Pesan</button>
                            </div>
                        </footer>
                </div>
            </div>
        </div>
    );
}
 
export default ContactModal;