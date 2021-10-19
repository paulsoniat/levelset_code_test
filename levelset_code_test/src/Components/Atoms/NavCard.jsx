const NavCard = ({cardInfo, setCardDisplay}) => {
  /* This component will display nav items for a information about an item that is passed in from props displaying birthday/name/image
    The onClick function can be passed in from parent to determine what to display when clicked, as well as takes in an optional callBack
  */
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
  
  export default NavCard;
  