import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from "../../Config";

const { urlWhatsapp, phone, messaje, urlInstagram, correo } = config;

function Header() {
    const whatsapp = `${urlWhatsapp}?phone=${encodeURIComponent(phone)}&text=${messaje}`;
    const email = `mailto:${encodeURIComponent(correo)}?Subject=${messaje}`;

    useEffect(() => {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);

            if (selectEl) {
                if (all) {
                    selectEl.forEach((e) => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        const handleClick = (e) => {
            let navar = select('#navbar');
            navar.classList.add('navbar-mobile');
            e.currentTarget.classList.toggle('bi-list');
            e.currentTarget.classList.toggle('bi-x');
            navar.classList.remove('navbar');

            const className = e.currentTarget.className;
            if (className === 'bi mobile-nav-toggle bi-list') {
                let navar = select('#navbar');
                navar.classList.add('navbar');
                navar.classList.remove('navbar-mobile');
            }
        };

        on('click', '.mobile-nav-toggle', handleClick);
    }, []);



    return (
        <header id="header">
            <div className="container">
                <h1><Link to="/">Juan Pablo Mateus</Link></h1>

                <nav id="navbar" className={`navbar`}>
                    <ul>
                        <li><Link to="/" className="nav-link active">Inicio</Link></li>
                        <li><Link to="/biografia" className="nav-link">Bio</Link></li>
                        <li><Link to="/portafolio" className="nav-link">Portafolio</Link></li>
                    </ul>
                    <i className={`bi bi-list mobile-nav-toggle`}></i>
                </nav>

                <div className="social-links">
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                    <a href={email} target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
                    <a href={urlInstagram} target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
