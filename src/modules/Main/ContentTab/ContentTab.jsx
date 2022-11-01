import React from "react";
import Card from "../Card/Card";
import Loader from "../../UI/Loader/Loader";
import AddNewCard from "../Card/AddNewCard";
import ErrorLoading from "../../UI/ErrorLoading/ErrorLoading";

export const ContentTab = (props) => {
  const { cards, handleOnclick, isLoading, errorLoading, setFormActive } =
    props;
  return (
    <div className="content-tab">
      <div className="card-wrapper">
        {isLoading && !errorLoading ? (
          <Loader />
        ) : errorLoading ? (
          <ErrorLoading />
        ) : <div className='cards'>{
          (
          cards.length > 0 &&
          cards.map((item) => (
            <Card
              card={item}
              key={item.id}
              id={item.id}
              onClick={(e) => handleOnclick(e)}
            />
          ))
        )}
        <AddNewCard setFormActive={setFormActive} />
        </div>}
      </div>
    </div>
  );
};

export default ContentTab;
