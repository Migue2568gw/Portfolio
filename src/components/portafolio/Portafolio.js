import React, { useEffect, useState, useRef } from 'react';
import { getFileURL } from '../firebase/FireConfig';
import { NavBar } from '../navBar/NavBar';
import Header from '../header/Header'

function Portafolio({ localitation }) {
    const initialNav = NavBar({ localitation });
    const initialNavRef = useRef(null);
    initialNavRef.current = initialNav;

    const [imageUrls, setImageUrls] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('Composiciones');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageUrls, setPopupImageUrls] = useState([]);

    useEffect(() => {
        const fetchUrls = async () => {
            const urls = await getFileURL();
            setImageUrls(urls);
        };
        fetchUrls();
    }, []);

    useEffect(() => {
        setPopupImageUrls(
            imageUrls.result
                ? imageUrls.result.filter((item) => item.categoria === filtroCategoria)
                : []
        );
    }, [imageUrls, filtroCategoria]);

    const handleCategoriaChange = (categoria) => {
        setFiltroCategoria(categoria);
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <section id="portfolio" ref={initialNavRef} className={`portfolio ${initialNavRef.current ? 'section-show' : ''}`}>   
            <div className="container">
                <div className="section-title">
                    <h2>Portafolio</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li id="selected" onClick={() => handleCategoriaChange('Composiciones')} data-filter="Composiciones">
                                Composiciones
                            </li>
                            <li onClick={() => handleCategoriaChange('Documental')} data-filter="Documental">
                                Documental
                            </li>
                            <li onClick={() => handleCategoriaChange('BodasBautizos')} data-filter="BodasBautizos">
                                Bodas y Bautizos
                            </li>
                            <li onClick={() => handleCategoriaChange('Bandas')} data-filter="Bandas">
                                Bandas de Metal
                            </li>
                            <li onClick={() => handleCategoriaChange('Productos')} data-filter="Productos">
                                Productos
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    {popupImageUrls.map((item, index) => (
                        <div className={`col-lg-4 col-md-6 portfolio-item ${filtroCategoria}`} key={index}>
                            <div className="portfolio-wrap">
                                <img src={item.urlImgs} className="portfolio-image" onClick={() => handleImageClick(index)} />
                            </div>
                        </div>
                    ))}
                </div>
                {showPopup && (
                    <div className="popup">
                        <button className="popup-close" onClick={handlePopupClose}>X</button>
                        <button className="popup-nav-left"
                            onClick={() => setSelectedImageIndex((prevIndex) =>
                                prevIndex === 0 ? popupImageUrls.length - 1 : prevIndex - 1
                            )}> &lt;
                        </button>
                        <img src={popupImageUrls[selectedImageIndex].urlImgs} className="popup-image" alt="" />
                        <button
                            className="popup-nav-right"
                            onClick={() => setSelectedImageIndex((prevIndex) =>
                                prevIndex === popupImageUrls.length - 1 ? 0 : prevIndex + 1
                            )}  >  &gt;
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portafolio;
