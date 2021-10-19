//import nav and import body from react components

import {useState} from 'react';
import ListSearch from '../Molecules/ListSearch';
import CatInfoDisplay from '../Molecules/CatInfoDisplay';

const CatAppContainer = props => {
  const {mockData, setMockData} = props;
  const [filteredCatData, setFilteredCatData] = useState ([]);
  const [filter, setFilter] = useState (false);
  const [selectedCat, setSelectedCat] = useState ();
  const [displayCatInfo, setDisplayCatInfo] = useState (false);

  const increaseCatViewCount = catInfo =>
    mockData.map (
      cat =>
        cat.id === catInfo.id ? {...cat, viewCount: cat.viewCount++} : cat
    );

  const setDisplayCard = (catInfo, display) => {
    setSelectedCat (catInfo);
    setDisplayCatInfo (display);
    increaseCatViewCount (catInfo);
  };

  const filterNavItems = catName => {
    const filterDataByName = mockData.filter (cat => {
      return cat.name.toLowerCase ().includes (catName.toLowerCase ());
    });
    !catName ? setFilter(false) : setFilter (true);
    setFilteredCatData (filterDataByName);
  };

  console.log(filter, filteredCatData, mockData)

  return (
    <div>
      <div className="d-flex">
        <ListSearch
          data={filter ? filteredCatData : mockData}
          setCardDisplay={setDisplayCard}
          modalOpen={displayCatInfo}
          filterSearchFunction={filterNavItems}
        />
        <CatInfoDisplay
          selectedCat={selectedCat}
          data={mockData}
          setData={setMockData}
          modalOpen={displayCatInfo}
          setModal={setDisplayCatInfo}
          setSelectedCat={setSelectedCat}
        />
      </div>
    </div>
  );
};

export default CatAppContainer;
