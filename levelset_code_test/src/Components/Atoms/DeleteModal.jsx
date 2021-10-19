const Popup = ({handleDeleteTrue, handleDeleteFalse}) => {
  return (
    <div>
      <div>
        <p>Send the cat to the SPCA?</p>
        <button onClick={handleDeleteFalse}>
          Cancel
        </button>
        <button onClick={handleDeleteTrue}>
          Confirm
        </button>
      </div>
    </div>
  );
};
export default Popup;
