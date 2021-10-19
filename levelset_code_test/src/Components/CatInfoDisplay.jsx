import CatEditModal from '../Components/CatEditModal'
import CatInfoCard from '../Components/CatInfoCard'

const CatInfoDisplay = (props) => {
    const editCat = (catId, callback, callbackId) => {
      const catData = JSON.parse(localStorage.mockData);

      
      callback(!callbackId)
  }
  
  const deleteCat = (catId) => {
      const catData = JSON.parse(localStorage.mockData);
      const updatedCatData = catData.filter((cat) => {
        if (cat.id !== catId) {
          return cat;
        }
      })
      props.setData(updatedCatData)
      props.setSelectedCat()
      localStorage.setItem('mockData', JSON.stringify(updatedCatData))
  }
    return (
       <div className="col-lg-10 col-md-10 col-sm-9 vh-100" style={{backgroundColor: 'gray'}}>
        {props.modalOpen ? <CatEditModal selectedCat={props.selectedCat} setSelectedCat={props.setSelectedCat} toggleModal={props.setModal} modalOpen={props.modalOpen} setCatData={props.setData}/> : null}
        {props.selectedCat ? <CatInfoCard selectedCat={props.selectedCat} setSelectedCat={props.setSelectedCat} /> : <div> Please select a cat to continue </div>}
        {props.selectedCat && !props.modalOpen ? 
        <div>
          <button onClick={() => {editCat(props.selectedCat.id, props.setModal)}}> Edit </button>
          <button onClick={() => {deleteCat(props.selectedCat.id)}}> Delete </button> 
        </div> : null}
      </div>
    );
  }
  
  export default CatInfoDisplay;
  