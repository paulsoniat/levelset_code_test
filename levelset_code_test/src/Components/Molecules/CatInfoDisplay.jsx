import {useState} from 'react';
import Popup from '../Atoms/DeleteModal'
import CatEditModal from './CatEditModal';
import CatInfoCard from '../Atoms/CatInfoCard';

const CatInfoDisplay = (props) => {
    const editCat = (catId, callback, callbackId) => {
      callback(!callbackId)
  }

  const [popup, setPopup] = useState({
    show: false, // initial values set to false and null
    id: null,
  });

  const handleDelete = (id) => {
    setPopup({
      show: true,
      id,
    });
    console.log(popup, 'popup')
  };
  
  // This will perform the deletion and hide the Confirmation Box
  
  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const catData = JSON.parse(localStorage.mockData);
      const updatedCatData = catData.filter((cat) => {
        if (cat.id !== props.selectedCat.id) {
          return cat;
        }
      })
      props.setData(updatedCatData)
      props.setSelectedCat()
      localStorage.setItem('mockData', JSON.stringify(updatedCatData))
      setPopup({
        show: false,
        id: null,
      });
    }
  };
  
  // This will just hide the Confirmation Box when user clicks "No"/"Cancel"
  
  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };
  
    return (
      <div className="col-lg-10 col-md-10 col-sm-9 vh-100" style={{backgroundColor: 'gray'}}>
        {props.modalOpen ? <CatEditModal selectedCat={props.selectedCat} setSelectedCat={props.setSelectedCat} toggleModal={props.setModal} modalOpen={props.modalOpen} setCatData={props.setData}/> : null}
        {props.selectedCat ? <CatInfoCard selectedCat={props.selectedCat} setSelectedCat={props.setSelectedCat} /> : <div> Please select a cat to continue </div>}
        {props.selectedCat && !props.modalOpen ? 
        <div>
          <button onClick={() => {editCat(props.selectedCat.id, props.setModal)}}> Edit </button>
          <button onClick={() => {handleDelete(props.selectedCat.id)}}> Delete </button> 
        </div> : null}
        {popup.show && (
          <Popup
            handleDeleteTrue={handleDeleteTrue}
            handleDeleteFalse={handleDeleteFalse}
          />
       )}
      </div>
    );
  }
  
  export default CatInfoDisplay;
  