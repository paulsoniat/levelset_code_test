//import nav and import body from react components

import {useState} from 'react';
import ListSearch from '../Molecules/ListSearch';
import InfoDisplay from '../Molecules/InfoDisplay';

const CatAppContainer = ({mockData, setMockData}) => {
  const [filteredCatData, setFilteredCatData] = useState ([]);
  const [filter, setFilter] = useState (false);
  const [selectedCat, setSelectedCat] = useState ();
  const [displayCatInfo, setDisplayCatInfo] = useState (false);

  /*
    This is the main page view of the application, taking in the mock data from the start of the application.
    We have some of our main state components into which data flows above, as well as a view counter, and helpers for determining which card to display and which to filter
    I used this component to house this particular information since all data flows to this and it can act as sort of a control board for data flow especially between selection, navigation, and display information
  */

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

  return (
    <div>
      <div className="d-flex">
        <ListSearch
          data={filter ? filteredCatData : mockData}
          setCardDisplay={setDisplayCard}
          modalOpen={displayCatInfo}
          filterSearchFunction={filterNavItems}
        />
        <InfoDisplay
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
