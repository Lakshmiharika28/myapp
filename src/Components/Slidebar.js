import React from 'react'
import logo from './images/logo.jpeg';
import { Link } from 'react-router-dom';
 function Slidebar() {
  return (
      <>
      <div className='col-md-2 menu'>
        <div className="logodiv" style={{display:'flex'}}>
          <i class="fa-solid fa-bars " style={{ color:'white'}}></i>
           <img src={logo} alt='no' id='logo'/>  
          </div>
          <div className='sidebar'>
            <ul>
              <Link to="/" className='linkmenu'><li><i class="fa-solid fa-home"></i>HOME</li></Link>
              <Link to="/Shorts" className='linkmenu'><li><i class="fa-solid fa-bolt"></i> SHORTS</li></Link>
              <li><i class="fa-solid fa-money-bill-wheat"></i> SUBSCRIPTIONS</li>
<hr/>
            </ul>
            <ul>
              <li><i class="fa-solid fa-book"></i> LIBRARY</li>
              <li><i class="fa-solid fa-tasks"></i> HISTORY</li>
              <li><i class="fa-solid fa-film"></i> YOUR VIDEOS</li>
              <li><i class="fa-solid fa-window-restore"></i> WATCH LATER</li>
              <li><i class="fa-solid fa-thumbs-up"></i> LIKED VIDEOS</li>

<hr/>
            </ul>
          </div>
      </div>
      </>
  );
}

export default Slidebar;;
