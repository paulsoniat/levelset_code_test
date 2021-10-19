//import nav and import body from react components

import {useEffect, useState} from 'react'
import mockData from './Helpers/Constants/mockData'
import CatAppContainer from './Components/Pages/CatAppContainer'
const App = () => {

  const [mockCatData, setMockCatData] = useState(mockData);
  useEffect(() => {
    localStorage.setItem('mockData', JSON.stringify(mockData));
  }, [])
  
  if (mockCatData) {
    return (
      <div className="App">
       <CatAppContainer mockData={mockCatData} setMockData={setMockCatData} />
      </div>
    );
  } else {
    return (
      <div> loading ...</div>
    )
  }
}

export default App;
