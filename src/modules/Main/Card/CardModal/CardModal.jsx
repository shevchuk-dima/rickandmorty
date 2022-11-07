import React from "react";
import "./CardModal.css";
const CardModal = (props) => {
  const { activeCardModal, setActiveCardModal, curCard} = props;
  return (
    <div
      className={
        activeCardModal
          ? "card-modal-wrapper card-modal-wrapper-active"
          : "card-modal-wrapper"
      }
      
      onClick = {()=>setActiveCardModal(false)}
    >
      <div className="card-modal" onClick={e=>e.stopPropagation()}>
      <div className="img">
          <img src={curCard.image} />
        </div>
        <div className="info">
          <div className="info-wrapper"> 
            <p><span className="title-card">Name: </span>{curCard.name}</p>
            <p><span className="title-card">Status: </span> {curCard.status}</p>
            <p><span className="title-card">Species: </span> {curCard.species}</p>
            <p><span className="title-card">Type: </span> {curCard.type}</p>
            <p><span className="title-card">Gender: </span> {curCard.gender}</p>
            <p><span className="title-card">Location name: </span> {curCard.location === undefined ? "" : curCard.location.name}</p>
            <p><span className="title-card">Origin name: </span> {curCard.origin === undefined ? "" : curCard.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
