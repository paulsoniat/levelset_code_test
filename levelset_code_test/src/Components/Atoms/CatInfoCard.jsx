const CatInfoCard = props => {
  return (
    <div className="info-container">
      <img
        className="image-container"
        src={props.selectedCat.thumbnailUrl}
        alt=""
      />
      <h5> {props.selectedCat.name} </h5>
      <h5> {props.selectedCat.birthday} </h5>
      <h5> {props.selectedCat.ownerName} </h5>
      <h5> Number of views: {props.selectedCat.viewCount} times </h5>
    </div>
  );
};

export default CatInfoCard;
