//import nav and import body from react components

import {useEffect, useState} from 'react'
import mockData from './Helpers/mockData'
import CatAppContainer from './Components/CatAppContainer'
const App = () => {

  const [mockCatData, setMockCatData] = useState(mockData);
  useEffect(() => {
    localStorage.setItem('mockData', JSON.stringify(mockData));
  }, [])
  
  if (mockCatData) {
    return (
      <div className="App">
       <CatAppContainer />
      </div>
    );
  } else {
    return (
      <div> loading ...</div>
    )
  }
}

export default App;
