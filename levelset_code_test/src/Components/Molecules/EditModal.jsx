import {useState} from 'react';
import Dropdown from '../Atoms/Dropdown';
import DatePicker from 'react-datepicker';
import {options} from '../../Helpers/Constants/DropdownMenuOptions';
import {formatDate} from '../../Helpers/Functions/formatDate';
import 'react-datepicker/dist/react-datepicker.css';

const EditModal = ({toggleModal, modalOpen, selectedCat, setSelectedCat, setCatData}) => {
  const [startDate, setStartDate] = useState (new Date ());

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
  //TODO: break out the logic of these into a reusable component for first two inputs

  /*
    The following view will allow users to change inputs and view those changes in real time for the selected cat
    However, only on save will all data flow upwards and actually change the underlying data set
    Use this component to edit information about the initial underlying data, and save if desired.
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
          <div className="col-12">
            Thumbnail Url
            <input
              onChange={e => {
                e.preventDefault ();
                setSelectedCat ({...selectedCat, thumbnailUrl: e.target.value});
              }}
            />
          </div>
          <div className="col-12">
            Name
            <input
              onChange={e => {
                e.preventDefault ();
                setSelectedCat ({...selectedCat, name: e.target.value});
              }}
            />
          </div>
          <div className="col-12">
            Birthdate
            <DatePicker
              selected={startDate}
              onChange={date => {
                setStartDate (date);
                const formattedDate = formatDate (date.toString ());
                setSelectedCat ({...selectedCat, birthday: formattedDate});
              }}
            />
          </div>
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
