import {useState} from 'react';
import Popup from '../Atoms/DeleteModal';
import EditModal from './EditModal';
import InfoCard from '../Atoms/InfoCard';
import InitialPrompt from '../Atoms/InitialPrompt';

const InfoDisplay = ({setSelectedCat, setData, selectedCat, modalOpen, setModal}) => {
  const editCat = (catId, callback, callbackId) => {
    callback (!callbackId);
  };

  const [popup, setPopup] = useState ({
    show: false, // initial values set to false and null
    id: null,
  });

  const handleDelete = id => {
    setPopup ({
      show: true,
      id,
    });
  };

  // This will perform the deletion and hide the Confirmation Box

  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const catData = JSON.parse (localStorage.mockData);
      const updatedCatData = catData.filter (cat => {
        if (cat.id !== selectedCat.id) {
          return cat;
        }
      });
      setData (updatedCatData);
      setSelectedCat ();
      localStorage.setItem ('mockData', JSON.stringify (updatedCatData));
      setPopup ({
        show: false,
        id: null,
      });
    }
  };

  // This will just hide the Confirmation Box when user clicks "No"/"Cancel"

  const handleDeleteFalse = () => {
    setPopup ({
      show: false,
      id: null,
    });
  };

  /*
    This component handles view logic as well as edit and delete request for viewing particular cards that a user would like to edit
    It will use the props to handle edit and delete logic as well as what to render with local function depending on the state
    This can be used to determine what the user is shown on the main screen for interactive purposes in the application.
  */
  return (
    <div
      className="col-lg-10 col-md-10 col-sm-9 display-container grey-background"
    >
      {modalOpen
        ? <EditModal
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
            toggleModal={setModal}
            modalOpen={modalOpen}
            setCatData={setData}
          />
        : null}
      {selectedCat
        ? <InfoCard
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
          />
        : <InitialPrompt />}
      {selectedCat && !modalOpen
        ? <div>
            <button
              onClick={() => {
                editCat (selectedCat.id, setModal);
              }}
            >
              {' '}Edit{' '}
            </button>
            <button
              onClick={() => {
                handleDelete (selectedCat.id);
              }}
            >
              {' '}Delete{' '}
            </button>
          </div>
        : null}
      {popup.show &&
        <Popup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />}
    </div>
  );
};

export default InfoDisplay;
