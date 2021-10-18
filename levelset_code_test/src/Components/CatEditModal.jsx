import {useState} from 'react' 
import Dropdown from './Dropdown';
const CatEditModal = (props) => {
  const {toggleModal, modalOpen, selectedCat, setSelectedCat} = props
  const options = [{label: 'Jane D', value: 'jane doe'}, {label: 'john snow', value: 'John Snow'}, {label: 'paul s', value: ' Paul Soniat'}]
  const _editModalCat = () => {
    const catData = JSON.parse(localStorage.mockData);
    console.log(catData, 'cat data')

    const updatedCatData = catData.map((cat) => {
      if (cat.id !== selectedCat.id) {
        return cat;
      }
      return selectedCat;
    })
    props.setCatData(updatedCatData)
    localStorage.setItem('mockData', JSON.stringify(updatedCatData));
  }
  console.log(selectedCat, 'selected cat!@!@')
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
          console.log(selectedCat, 'cat slectest url')
        }}>
        </input>
        </div>
        <div className="col-12">
        Name
        <input onChange={(e) => {
          e.preventDefault()
          setSelectedCat({...selectedCat, name: e.target.value})
          console.log(e.target.value)
        }}>
        </input>
        </div>
        <div className="col-12">
        Birthdate
        <input onChange={(e) => {
          e.preventDefault()
          setSelectedCat({...selectedCat, birthday: e.target.value})
          console.log(e.target.value)
        }}>
        </input>
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