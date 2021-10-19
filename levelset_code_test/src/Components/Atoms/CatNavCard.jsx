const CatNavCard = (props) => {
    const {cardInfo, setCardDisplay} = props
    return (
       <div className="col-12 nav-card" onClick={() => {setCardDisplay(cardInfo, true)}}>
        <img 
            src={cardInfo.thumbnailUrl}
            alt=""
            className="nav-image"
         />
        {cardInfo.name}
        <br/>
        {cardInfo.birthday}
      </div>
    );
  }
  
  export default CatNavCard;
  