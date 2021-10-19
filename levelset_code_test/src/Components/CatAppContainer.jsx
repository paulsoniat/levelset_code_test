//import nav and import body from react components

import {useEffect, useState} from 'react'
import mockData from '../Helpers/mockData'
import ListSearch from './ListSearch'
import CatInfoDisplay from './CatInfoDisplay'
import CatEditModal from './CatEditModal'
const CatAppContainer = () => {

  const [mockCatData, setMockCatData] = useState(mockData);
  const [filteredCatData, setFilteredCatData] = useState([]);
  const [filter, setFilter] = useState(false)
  const [selectedCat, setSelectedCat] = useState();
  const [displayCatInfo, setDisplayCatInfo] = useState(false);

  const setDisplayCard = (catInfo, display) => {
      setSelectedCat(catInfo);
      setDisplayCatInfo(display)
  }

  const filterNavItems = (catName) => {
    const filterDataByName = mockCatData.filter((cat) => {
      return cat.name.toLowerCase().includes(catName.toLowerCase())
    })
    setFilter(true)
    setFilteredCatData(filterDataByName)
  }
  
    return (
      <div>
       <div className="d-flex">
       <ListSearch data={filter ? filteredCatData : mockCatData} setCardDisplay={setDisplayCard} modalOpen={displayCatInfo} filterSearchFunction={filterNavItems} />
       <CatInfoDisplay selectedCat={selectedCat} data={mockCatData} setData={setMockCatData} modalOpen={displayCatInfo} setModal={setDisplayCatInfo} setSelectedCat={setSelectedCat}/>
       </div>
      </div>
    );
}

export default CatAppContainer;
