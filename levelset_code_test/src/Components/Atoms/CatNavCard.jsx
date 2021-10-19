const CatNavCard = props => {
  const {cardInfo, setCardDisplay} = props;
  return (
    <div
      className="col-12 nav-card"
      onClick={() => {
        setCardDisplay (cardInfo, true);
      }}
    >
      <img src={cardInfo.thumbnailUrl} alt="" className="nav-image" />
      <h6 className="card-text">
        {cardInfo.name}
      </h6>
      <br />
      {cardInfo.birthday}
    </div>
  );
};

export default CatNavCard;
