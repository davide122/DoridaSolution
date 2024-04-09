import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import ButtonPersonal from '../Commons/Style/Buttons/ButtonPersonal';
import { CgClose } from "react-icons/cg";


const ServiceModal = ({ show, onHide, serviceInfo }) => {
    const modalBodyClass = serviceInfo.color === "Blu" ? "Blu" : "Lilla";
    const modalBodyText = serviceInfo.color === "Blu" ? "TestoBlu" : "TestoLilla";
    const Changebg = serviceInfo.color === "Blu" ? "ChangeBlue" : "ChangeLilla";

console.log(modalBodyClass);
    useEffect(() => {
        if (show) {
          document.body.classList.add("modal-open-custom");
        } else {
          document.body.classList.remove("modal-open-custom");
        }
    
        return () => {
          document.body.classList.remove("modal-open-cusstom");
        };
      }, [show]);

      const handleShowMore = () => {
        onHide(); 

        
    };

    
  return (
    <Modal show={show} onHide={onHide} size="xl" aria-labelledby="contained-modal-title-vcenter w-100"  centered>
      <div className={`CloseButtonDiv ${Changebg}`}>
<button onClick={onHide} className={`Close-Button`}></button>
</div>
      <Modal.Body id='prova' className={modalBodyClass}> 
        <div className="container-fluid  w-100">
            <div className="row">
                <div className="col col-md-7 col-sm-12">
                <h2 className={`Titolo ${modalBodyText}`}> {serviceInfo.title}</h2>
        <p className='Sottotitolo'>{serviceInfo.description.slice(0,350)+"..."}</p>
        <button className='Info-Button' onClick={handleShowMore}></button>
                </div>
                <div className="col col-md-5 max col-sm-12">
<img src={serviceInfo.src} alt={serviceInfo.title} className='img-fluid imageExplain '/>
                </div>
            </div>
        </div>
       
      </Modal.Body>
     
    </Modal>
  );
};

export default ServiceModal;
