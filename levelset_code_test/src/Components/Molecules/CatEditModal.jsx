import {useState} from 'react' 
import Dropdown from '../Atoms/Dropdown';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const CatEditModal = (props) => {
  const {toggleModal, modalOpen, selectedCat, setSelectedCat} = props
  const options = [{label: 'Jane D', value: 'jane doe'}, {label: 'john snow', value: 'John Snow'}, {label: 'paul s', value: ' Paul Soniat'}]
  const _editModalCat = () => {
    const catData = JSON.parse(localStorage.mockData);

    const updatedCatData = catData.map((cat) => {
      if (cat.id !== selectedCat.id) {
        return cat;
      }
      return selectedCat;
    })
    props.setCatData(updatedCatData)
    localStorage.setItem('mockData', JSON.stringify(updatedCatData));
  }

  const _formatDate = (dateString) => {
    const splitDate = dateString.split(' ');
    const formattedDate = `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`
    return formattedDate;
  }
  console.log(selectedCat)
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div class="modal-content">
    <div class="modal-header">
      <span class="close" onClick={() => {toggleModal(!modalOpen)}}>&times;</span>
      <h2>{props.selectedCat.name}</h2>
    </div>
    <div className="row" >
      <div class="modal-body">
    <div className="col-12">
        Thumbnail Url
        <input onChange={(e) => {
          e.preventDefault()
          setSelectedCat({...selectedCat, thumbnailUrl: e.target.value})
        }}>
        </input>
        </div>
        <div className="col-12">
        Name
        <input onChange={(e) => {
          e.preventDefault()
          setSelectedCat({...selectedCat, name: e.target.value})
        }}>
        </input>
        </div>
        <div className="col-12">
        Birthdate
          <DatePicker selected={startDate} onChange={(date) =>  {
            setStartDate(date)
            const formattedDate = _formatDate(date.toString())
            setSelectedCat({...selectedCat, birthday: formattedDate})
          }} />
        </div>
        <div className="col-12">
        Owner
        <Dropdown options={options} setSelectedOption={setSelectedCat} currentSelection={selectedCat}/>
      </div>
        </div>
    </div>
    <div class="modal-footer">
      <span class="save" onClick={() => {_editModalCat()}}> Save</span>
    </div>
  </div>
  )
}

export default CatEditModal;