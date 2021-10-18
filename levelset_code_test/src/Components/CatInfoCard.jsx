const CatInfoCard = (props) => {
    const styleObj = {"height" : "250px", "width" : "50%" }
    return (
        <div>
        <img 
            src={props.selectedCat.thumbnailUrl}
            alt=""
            style={styleObj}
         />
            <div> {props.selectedCat.name} </div>
            <div> {props.selectedCat.birthday} </div>
            <div> {props.selectedCat.ownerName} </div>
            <div> {props.selectedCat.viewCount} </div>
        </div>
    );
  }
  
  export default CatInfoCard;
  