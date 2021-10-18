

const CatNavCard = (props) => {
    //TODO add use effect to update state of local storage for cat on click
    const {cardInfo, setCardDisplay, modalOpen} = props
    console.log(cardInfo)
    const styleObj = {"height" : "100px", "width" : "50%" }
    return (
       <div className="col-12" style={{backgroundColor: 'white', border:' 1px solid black'}} onClick={() => {setCardDisplay(cardInfo, true)}}>
        <img 
            src={cardInfo.thumbnailUrl}
            alt=""
            style={styleObj}
         />
        {cardInfo.name}
        <br/>
        {cardInfo.birthday}
      </div>
    );
  }
  
  export default CatNavCard;
  