import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import SearchBox from './Components/SearchBox/SearchBox'
import Bus from './Pages/Bus'
import Flight from './Pages/Flight'
import Train from './Pages/Train'
import Movies from './Pages/Movies'
import Cars from './Pages/Cars'
import Events from './Pages/Events'
import Tours from './Pages/Tours'
import Hotel from './Pages/Hotel'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import Practice from './Pages/Practice'

function App() {




    const location = useLocation();

    console.log(location.pathname);


    useEffect(()=>{
      window.scrollTo(0,0);
      // handleSideBar();
    }, [location.pathname]);
  const [showBar, setShowBar] = useState("block");
    const handleSideBar = ()=>{
     
      if(showBar == "block"){
        setShowBar("hidden");
        return;
      }else{
        setShowBar("block");
        return;
      }

    }
    
  return (
    <div className='bg-gray-100 overflow-x-hidden'>
      
   
      <Navbar handleSideBar={handleSideBar}/>
      {location.pathname == "/login" || location.pathname == "/signup"  ? <></> :   <Sidebar handleSideBar={handleSideBar} showBar={showBar}/>}
      <div id='main-content' className='absolute top-20 lg:left-[250px] md:left-[80px] lef-0'>


    <Routes>
     <Route path='/' element={ <Bus category="Bus"/>} />
     <Route path='/flight' element={ <Flight category="Flight"/>} />
     <Route path='/train' element={ <Train category="Train"/>} />
     <Route path='/movies' element={ <Movies category="Movies"/>} />
     <Route path='/cars' element={ <Cars category="Cars"/>} />
     <Route path='/hotel' element={ <Hotel category="Hotel"/>} />
     <Route path='/events' element={ <Events category="Events"/>} />
     <Route path='/tours' element={ <Tours category="Tours"/>} />

    </Routes>

     {location.pathname == "/practice" || location.pathname == "/login" || location.pathname == "/signup"   ? "" : <Footer/>}

      </div>

<div className='absolute top-20 w-[full] bg-gray-100'>
  
<Routes>
    <Route path='/login' element={ <Login category="Login"/>} />
     <Route path='/signup' element={ <Signup category="Signup"/>} />
     <Route path='/practice' element={ <Practice category="Practice"/>} />
    </Routes>
</div>

    </div>
  )
}

export default App
