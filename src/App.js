import logo from './logo.svg';
import './App.css';
import Slidebar from './Components/Slidebar';
import content from './Components/content';
import Shorts from './Components/Shorts';
import Home from './Components/Home';
import Hooks from './Components/Hooks';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { createContext ,useState} from 'react';
import Conexpo from './Components/Conexpo';
import axios, { Axios } from 'axios';
import Products from './Components/Products';
import { User } from './Components/Users';
import { Add } from './Components/Adduser';
export const store=createContext();
function App() {
  let Student=[
    {
      name:"taetae",
      roll:"1230"
    },
    {
      name:"Anusha",
      roll:"1013"
    },
    {
      name:"minie",
      roll:"1013"
    },
    {
      name:"kookie",
      roll:"0901"
    }
  ]
  const [data,setData]=useState(Student)
  return(
    <>
      <BrowserRouter>
      <store.Provider value={[data,setData]}>
      <div className='row'>
      <Slidebar/>
      <><Hooks/>
      <Conexpo/>
      <Products/></>
      <User/>
      <Add/>
      <Routes>
        {/*<Route path='/' element={<Home/>}></Route>
        <Route path='/Shorts' element={<Shorts/>}></Route>*/}
      </Routes>
      </div>
      </store.Provider>
      </BrowserRouter>
    </>
  );
  }
export default App;