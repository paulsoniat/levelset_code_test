//import nav and import body from react components

import {useEffect, useState} from 'react'
import mockData from './Helpers/mockData'
import ListSearch from './Components/ListSearch'
import CatInfoDisplay from './Components/CatInfoDisplay.jsx'
const App = () => {

  const [mockCatData, setMockCatData] = useState(null)

  useEffect(() => {
    console.log(mockData)
    // function checkUserData() {
    //   const localStorageData = localStorage.setItem('mockData', mockData)
  
    //   if (localStorageData) {
    //     setMockCatData(localStorageData)
    //   }
    //   if (!mockCatData) {
    //     localStorage.setItem('mockData', mockData)
    //     setMockCatData(localStorage.getItem('mockData'))
    //   }
    // }

    // checkUserData()
    // console.log(mockCatData)
  
    // window.addEventListener('storage', checkUserData)
    // return () => {
    //   window.removeEventListener('storage', checkUserData)
    // }
    localStorage.setItem('mockData', JSON.stringify(mockData));
    const test = JSON.parse(localStorage.getItem('mockData'));
    console.log(test, 'test')
  }, [setMockCatData])
  
  //TODO: pass inm mock cat data
  return (
    <div className="App">
     <div className="d-flex">
     <ListSearch />
     <CatInfoDisplay />
     </div>
    </div>
  );
}

export default App;
