//import nav and import body from react components

import {useEffect, useState} from 'react'
import mockData from '../Helpers/mockData'
import ListSearch from './ListSearch'
import CatInfoDisplay from './CatInfoDisplay'
import CatEditModal from './CatEditModal'
const CatAppContainer = (props) => {
  const {mockData, setMockData} = props;
  const [filteredCatData, setFilteredCatData] = useState([]);
  const [filter, setFilter] = useState(false)
  const [selectedCat, setSelectedCat] = useState();
  const [displayCatInfo, setDisplayCatInfo] = useState(false);

  const increaseCatViewcount = (catInfo) => (
    mockData.map((cat) => cat.id === catInfo.id ? {...cat, viewCount: cat.viewCount++} : cat
  ))

  const setDisplayCard = (catInfo, display) => {
      setSelectedCat(catInfo);
      setDisplayCatInfo(display)
      increaseCatViewcount(catInfo)
  }

  const filterNavItems = (catName) => {
    const filterDataByName = mockData.filter((cat) => {
      return cat.name.toLowerCase().includes(catName.toLowerCase())
    })
    setFilter(true)
    setFilteredCatData(filterDataByName)
  }
  
    return (
      <div>
       <div className="d-flex">
       <ListSearch data={filter ? filteredCatData : mockData} setCardDisplay={setDisplayCard} modalOpen={displayCatInfo} filterSearchFunction={filterNavItems} />
       <CatInfoDisplay selectedCat={selectedCat} data={mockData} setData={setMockData} modalOpen={displayCatInfo} setModal={setDisplayCatInfo} setSelectedCat={setSelectedCat}/>
       </div>
      </div>
    );
}

export default CatAppContainer;
