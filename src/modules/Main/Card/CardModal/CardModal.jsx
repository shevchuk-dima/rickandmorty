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
        <div className="info">
          <div className="info-wrapper"> 
            <p>Name: {curCard.name}</p>
            <p>Status: {curCard.status}</p>
            <p>Species: {curCard.species}</p>
            <p>Type: {curCard.type}</p>
            <p>Gender: {curCard.gender}</p>
            <p>Location name: {curCard.location === undefined ? "" : curCard.location.name}</p>
            <p>Origin name: {curCard.origin === undefined ? "" : curCard.origin.name}</p>
          </div>
        </div>
        <div className="img">
          <img src={curCard.image} />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
