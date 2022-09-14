import { useEffect, useState } from 'react'
import './App.css'
import RecharView from './component/RecharView'
import WeatherInfo from './component/WeatherInfo'

function App() {
  const [ Loader, setLoader] = useState(false);

  useEffect( () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 11000);
  }, []);

  return (
    
    <div className="App">
      <div className='AppCont'>
            {Loader ? ( 
          <RecharView />
        ) : ( 
          <WeatherInfo />
          )}
      </div>            
    </div>
    
  )
}

export default App
