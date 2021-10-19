import {useState} from 'react';
import Dropdown from '../Atoms/Dropdown';
import DatePicker from 'react-datepicker';
import {options} from '../../Helpers/Constants/DropdownMenuOptions';
import {formatDate} from '../../Helpers/Functions/formatDate';
import 'react-datepicker/dist/react-datepicker.css';

const CatEditModal = props => {
  const {toggleModal, modalOpen, selectedCat, setSelectedCat} = props;
  const [startDate, setStartDate] = useState (new Date ());

  const _editModalCat = () => {
    /* 
    Wanted to show the difference of access to local storage instead of the parent state in case you wanted to see both
    I would normally have one source of truth for state
    */
    const catData = JSON.parse (localStorage.mockData);
    const updatedCatData = catData.map (cat => {
      if (cat.id !== selectedCat.id) {
        return cat;
      }
      return selectedCat;
    });
    props.setCatData (updatedCatData);
    localStorage.setItem ('mockData', JSON.stringify (updatedCatData));
  };
  //TODO: break out the logic of these into a reusable component for first two inputs
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
        <h2>{props.selectedCat.name}</h2>
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

export default CatEditModal;
