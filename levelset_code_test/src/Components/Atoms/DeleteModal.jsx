const Popup = ({handleDeleteTrue, handleDeleteFalse}) => {
  /*
    This component takes handle delete (true/false) functions
    It only renders the buttons and uses the props functions for the parent to determine the logic
  */
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
