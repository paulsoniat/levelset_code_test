const CatInfoCard = (props) => {
    const styleObj = {
        margin: "0 auto",
        width: "60%",
        border: "3px solid #73AD21",
        padding: "10px",
        display: "flex",
        "flexDirection": "column",
        "maxHeight": "50%",
        "textAlign": "left"
      }
    const imgStyle = {
      "maxWidth": "20vw",
      "maxHeight": "10vw",
      "alignSelf" : "center"
    }
    return (
        <div style={styleObj}>
        <img 
            style={imgStyle}
            src={props.selectedCat.thumbnailUrl}
            alt=""
         />
            <div> {props.selectedCat.name} </div>
            <div> {props.selectedCat.birthday} </div>
            <div> {props.selectedCat.ownerName} </div>
            <div> Number of views: {props.selectedCat.viewCount} times </div>
        </div>
    );
  }
  
  export default CatInfoCard;
  