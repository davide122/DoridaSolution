import React, { useState } from 'react';
import Slider from 'react-slick';
import ServiceModal from './ServiceModal'; 
import verticale from "../Commons/Image/Intelligenza (1).png";
import verticale2 from "../Commons/Image/Aivertical.png";
import orizzontale from "../Commons/Image/orizzontale.png";
import orizzontale2 from "../Commons/Image/Art.png";
import orizzontale3 from "../Commons/Image/Art (1).png";
import orizzontaledevelop from "../Commons/Image/Webdevelopment.png";
import orizzontaledevelop2 from "../Commons/Image/webdevelop2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesExplain = () => {
    const [modalContent, setModalContent] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const settings = {
        dots: true, // continua a mostrare i puntini di navigazione in basso, se li vuoi ancora
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false, // disabilita le frecce di navigazione
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false // assicurati che le frecce siano disabilitate anche nei breakpoints
                }
            }
        ]
    };
    

    const columnData = [
        {
            id: 'col1',
            colMdSize:"2",
            color:"Lilla;",
            images: [
                { id: 'img1', src: orizzontale3, title: 'Consulenze Strategiche', color:"Blu", description: "La consulenza strategica di DORIDA SOLUTION si distingue per la sua disponibilità quasi ininterrotta, riconoscendo l'importanza di supportare i clienti in ogni fase del loro percorso verso il successo. Siamo consapevoli che nel dinamico mondo del digitale, la tempistica può essere cruciale; per questo motivo, il nostro team è accessibile quasi ogni ora del giorno, pronto a offrire la sua guida e il suo supporto tecnico e strategico quando più ne avete bisogno." ,verticale:true},
                { id: 'img2', src: orizzontale2, title: 'Strategie Pubblicitarie',  color:"Lilla", description: "Le strategie pubblicitarie di DORIDA SOLUTION sono state progettate per massimizzare l'impatto e l'efficacia delle campagne dei nostri clienti nel dinamico mondo del digitale. La nostra filosofia si basa su un approccio olistico e personalizzato, che va ben oltre la semplice promozione di un prodotto o servizio. Comprendiamo che ogni brand ha una storia unica da raccontare e che ogni mercato ha le sue peculiarità. Per questo, le nostre strategie sono costruite attorno alle esigenze specifiche di ogni cliente, assicurando che ogni campagna pubblicitaria non solo raggiunga il suo pubblico target ma lo coinvolga in modo significativo." },
            ],
        },
        {
            id: 'col2',
            colMdSize:"3",
            color:"Blu;",
            images: [
                { id: 'img3', src: verticale, title: 'Intelligenza Artificiale', color:"Blu", description: "DORIDA SOLUTION offre servizi che integrano l'intelligenza artificiale nel marketing, sviluppo web, produzione di contenuti, e molto altro. Utilizzando l'AI, DORIDA SOLUTION è in grado di offrire soluzioni innovative e personalizzate che tengono conto delle esigenze specifiche di ogni progetto. Questo approccio consente di massimizzare l'impatto e l'efficacia delle strategie digitali implementate​​.", },
            ],
        },
        {
            id: 'col3',
            colMdSize:"2",
            color:"Blu;",
            images: [
                { id: 'img4', src: orizzontaledevelop,color:"Blu", title: 'Service 4', description: '...' },
                { id: 'img5', src: orizzontaledevelop2,color:"Lilla", title: 'Service 5', description: '...' },
            ],
        },
        {
            id: 'col4',
            colMdSize:"3",
            color:"Blu;",
            images: [
                { id: 'img6', src: verticale2, title: 'Service 6', description: '...' },
            ],
        },
        {
            id: 'col5',
            colMdSize:"2",
            images: [
                { id: 'img7', src: orizzontale, title: 'Service 6', description: '...' },
                { id: 'img8', src: orizzontale, title: 'Service 5', description: '...' },
            ],
        },
  
    ];

    const handleImageClick = (imageData) => {
        setModalContent(imageData);
        setModalShow(true);
    };

    return (
        <div className="container-fluid slide">
            {/* Carosello visibile solo su dispositivi mobili */}
            <div className="d-md-none">
                <Slider {...settings} className='my-3'>
                    {columnData.flatMap(column => column.images).map(image => (
                        <div key={image.id} onClick={() => { setModalContent(image); setModalShow(true); }}>
                            <img src={image.src} alt={image.title} className="img-fluid rounded-5" />
                            
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Layout griglia per dispositivi non mobili */}
            <div className="d-none d-md-flex row">
                {columnData.map(column => (
                    <div key={column.id} className={`col-md-${column.colMdSize}`}>
                        {column.images.map(image => (
                            <div key={image.id} className="mb-5">
                                <img 
                                    src={image.src} 
                                    alt={image.title} 
                                    className="img-fluid rounded-5" 
                                    onClick={() => { setModalContent(image); setModalShow(true); }}
                                />
                                
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {modalContent && (
                <ServiceModal
                    show={modalShow}
                    onHide={() => { setModalShow(false); setModalContent(null); }}
                    serviceInfo={modalContent}
                />
            )}
        </div>
    );
};

export default ServicesExplain;
