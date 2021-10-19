import Dropdown from '../Atoms/Dropdown';
import InputField from '../Atoms/InputField';
import DateSelector from '../Atoms/DateSelector';
import {options} from '../../Helpers/Constants/DropdownMenuOptions';

const EditModal = ({toggleModal, modalOpen, selectedCat, setSelectedCat, setCatData}) => {

  const _editModalCat = () => {
    /* 
    Wanted to show the difference of access to local storage instead of the parent state in case you wanted to see both
    I would normally have one source of truth for state
    -- This component will take the selected cat and information from state to update the information about the selected cat
    -- only difference in this function and the rest is I dont pass in the cat data, just wanted to show I could use local storage if necessary for the initial data set
    */
    const catData = JSON.parse (localStorage.mockData);
    const updatedCatData = catData.map (cat => {
      if (cat.id !== selectedCat.id) {
        return cat;
      }
      return selectedCat;
    });
    setCatData(updatedCatData);
    localStorage.setItem ('mockData', JSON.stringify (updatedCatData));
  };

  /*
    The following view will allow users to change inputs and view those changes in real time for the selected cat
    However, only on save will all data flow upwards and actually change the underlying data set
    Use this component to edit information about the initial underlying data, and save if desired.
    This component combines atoms together to make the selections
  */
  return (
    <div class="modal-content">
      <div class="modal-header">
        <span
          class="close"
          onClick={() => {
            toggleModal (!modalOpen);
          }}
        >
          &times;
        </span>
        <h2>{selectedCat.name}</h2>
      </div>
      <div className="row">
        <div class="modal-body">
          <InputField setSelectedOption={setSelectedCat} selectedOption={selectedCat} inputTitle={"Thumbnail URL"}/>
          <InputField setSelectedOption={setSelectedCat} selectedOption={selectedCat} inputTitle={"Name"}/>
          <DateSelector setSelectedOption={setSelectedCat} selectedOption={selectedCat} inputTitle="Birthdate"/>
          <div className="col-12">
            Owner
            <Dropdown
              options={options}
              setSelectedOption={setSelectedCat}
              currentSelection={selectedCat}
            />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span
          class="save"
          onClick={() => {
            _editModalCat ();
          }}
        >
          {' '}Save
        </span>
      </div>
    </div>
  );
};

export default EditModal;
