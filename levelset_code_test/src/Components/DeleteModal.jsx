const Popup = ({ handleDeleteTrue, handleDeleteFalse }) => {
    return (
      <div>
        <div>
          <p>You sure you wanna delete?</p>
          <button onClick={handleDeleteFalse}>
            Cancel</button>
          <button onClick={handleDeleteTrue}>
            Confirm
          </button>
        </div>
      </div>
    );
  }
export default Popup