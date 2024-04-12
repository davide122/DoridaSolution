import React from 'react';
import davide from "../Commons/Image/Fotonostre/davide.png";

const ExplainPeople = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="row">
                <div className="col-md-6">
                    <img src={davide} alt="Descrizione dell'immagine" className="img-fluid vh-100" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-content">
                        <h1>Titolo del Contenuto</h1>
                        <p>
                            Questo è un esempio di testo che andrà a destra dell'immagine. Qui puoi inserire 
                            informazioni dettagliate riguardanti l'immagine oppure altri dati pertinenti alla 
                            discussione o al contesto del sito. Assicurati che il testo sia informativo e coinvolgente
                            per mantenere l'interesse del lettore.
                        </p>
                        <p>
                            Puoi aggiungere ulteriori paragrafi, elenchi puntati o numerati, e collegamenti per 
                            espandere l'informazione presentata e offrire una comprensione più profonda o risorse 
                            aggiuntive agli utenti.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplainPeople;
