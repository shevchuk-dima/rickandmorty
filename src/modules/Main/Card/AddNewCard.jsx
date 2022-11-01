import React from "react";
import "./AddNewCard.css";
const AddNewCard = (props) => {
  const { setFormActive } = props;

  return (
    <div className="add-card">
      <button className="btn-add" onClick={()=>setFormActive(true)}>+</button>
      <span>Add new</span>
    </div>
  );
};

export default AddNewCard;
