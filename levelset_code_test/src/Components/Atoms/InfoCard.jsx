const InfoCard = ({selectedCat}) => {
  // This component will render information about a selected cat from the props that is passed in
  const {name, birthday, ownerName, viewCount, thumbnailUrl} = selectedCat;
  return (
    <div className="info-container">
      <img
        className="image-container"
        src={thumbnailUrl}
        alt=""
      />
      <h5> {name} </h5>
      <h5> {birthday} </h5>
      <h5> {ownerName} </h5>
      <h5> Number of views: {viewCount} times </h5>
    </div>
  );
};

export default InfoCard;
