const CatInfoCard = (props) => {
    const styleObj = {
        margin: "auto",
        width: "60%",
        border: "3px solid #73AD21",
        padding: "10px"
      }
    return (
        <div style={styleObj}>
        <img 
            src={props.selectedCat.thumbnailUrl}
            alt=""
         />
            <div> {props.selectedCat.name} </div>
            <div> {props.selectedCat.birthday} </div>
            <div> {props.selectedCat.ownerName} </div>
            <div> {props.selectedCat.viewCount} </div>
        </div>
    );
  }
  
  export default CatInfoCard;
  