import React, { useRef } from 'react';
import Imagen from '../assets/JuanPablo.jpg';
import { NavBar } from '../navBar/NavBar'

export const Bio = ({ localitation }) => {
    const initialNav = NavBar({ localitation });
    const initialNavRef = useRef(null);
    initialNavRef.current = initialNav;

    return (
        <section
            id="Bio"
            ref={initialNavRef}
            className={`about-me ${initialNavRef.current ? 'section-show' : ''}`}
        >
            <div className="about-me container">
                <div className="section-title">
                    <h2>Acerca de mi</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={Imagen} className="img-fluid img_about" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <div className="contentBio">
                            <h3>Fótografo Audiovisual</h3>
                            <p className="fst-italic">
                                Apasionado por la fotografía y la videografía, Egresado de la
                                Corporación Universitaria Minuto De Dios.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{' '}
                                            <strong>Teléfono:</strong>{' '}
                                            <span>+57 3143264586</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{' '}
                                            <strong>Email:</strong>{' '}
                                            <span>nakamura206-n19@hotmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
