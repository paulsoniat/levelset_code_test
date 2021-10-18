//import nav and import body from react components

import {useEffect, useState} from 'react'
import mockData from '../Helpers/mockData'
import ListSearch from './ListSearch'
import CatInfoDisplay from './CatInfoDisplay'
import CatEditModal from './CatEditModal'
const CatAppContainer = () => {

  const [mockCatData, setMockCatData] = useState(mockData);
  const [selectedCat, setSelectedCat] = useState();
  const [displayCatInfo, setDisplayCatInfo] = useState(false);

  const setDisplayCard = (catInfo, display) => {
      setSelectedCat(catInfo);
      setDisplayCatInfo(display)
      console.log(selectedCat, displayCatInfo)
  }
  
    return (
      <div>
       <div className="d-flex">
       <ListSearch data={mockCatData} setCardDisplay={setDisplayCard} modalOpen={displayCatInfo}/>
       <CatInfoDisplay selectedCat={selectedCat} data={mockCatData} setData={setMockCatData} modalOpen={displayCatInfo} setModal={setDisplayCatInfo} setSelectedCat={setSelectedCat}/>
       </div>
      </div>
    );
}

export default CatAppContainer;
