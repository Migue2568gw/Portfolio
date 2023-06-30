import { useEffect, useState } from 'react';

export function NavBar({ localitation }) {
    const [initialNav, setInitialNav] = useState(null);
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const scrollto = (el) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };  

    useEffect(() => {
        if (localitation) {            
            if(localitation === '#Home'){
                let header = select('#header');
                header.classList.remove('header-top');
            }else{
                const initialNavElement = select(localitation);           
                if (initialNavElement) {
                    let header = select('#header');
                    let navlinks = select('#navbar .nav-link', true);
    
                    header.classList.add('header-top');
    
                    navlinks.forEach((item) => {
                        if (item.getAttribute('href') === localitation) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
    
                    setTimeout(function () {
                        initialNavElement.classList.add('section-show');
                    }, 350);
    
                    setInitialNav(initialNavElement);
                    scrollto(window.location.hash);
                } 
            }
       
        }
    }, []);

    return initialNav
}