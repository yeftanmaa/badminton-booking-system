import React, { useState } from "react";
import FaqData from '../json/FaqData.json';
import Sidebar from "./Sidebar";

const FAQ = () => {
    
    // State to keep track of which dropdown is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        // If the clicked dropdown is already open, close it, otherwise open the clicked one
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="container columns is-fullheight p-5">
           <Sidebar />

            <div className="column menu">
                <h1 className='is-size-2 has-text-weight-semibold mb-5 has-text-centered'>FAQs</h1>
                { FaqData.map(item => (
                    <div className="box is-clickable" onClick={() => toggleDropdown(item.index)} key={item.index}>
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <h2 className="is-size-5 mb-0">{item.question}</h2>
                            <a
                                onClick={() => toggleDropdown(item.index)}
                            >
                                {
                                    openIndex === item.index ?
                                        <span className="icon-text">
                                            <span className="icon">
                                                <i className="fas fa-chevron-up"></i>
                                            </span>
                                        </span>
                                    :
                                        <span className="icon-text">
                                            <span className="icon">
                                                <i className="fas fa-chevron-down"></i>
                                            </span>
                                        </span>
                                }
                            </a>
                        </div>
                        {openIndex === item.index && (
                            <div className="dropdown-content mt-3">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
