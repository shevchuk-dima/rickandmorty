import "./CardStyle.css";

function Card(props) {
  let cardInfo = props.card;
  return (
    <div
      className="card"
      onClick={(e) => {
        props.onClick(e);
      }}
      id={props.id}
    >
      <div className="card-img">
        <img src={cardInfo.image} />
      </div>
      <div className="card-info">
        <div className="card-title">{cardInfo.name}</div>
        <div className="card-author">
          <span>Status:</span> <span>{cardInfo.status}</span>
        </div>
        <div className="card-tags">
          <span>species: {cardInfo.species}</span>
        </div>
        <div className="card-social-info">
          <div className="card-likes">{cardInfo.type}</div>
          <div className="card-views">{cardInfo.gender} </div>
          {/*<div className="card-favourite">{(cardInfo.fav == "fav")? "Fav" :  "Not Fav"}</div>*/}
        </div>
      </div>
    </div>
  );
}

export default Card;
