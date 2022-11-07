import {Link} from 'react-router-dom';
import { useEffect } from 'react';
function Header(props) {

    return (
     <header className="App-header">
           <div className="header-current-page">
              <p id='headerName'>{props.headerName}</p>
          </div>
         <div className='header-pages'>
             <div className="header-page">
                  <Link to="/rickandmorty">Main</Link>
            </div>
               <div className="header-page">
               <Link to="/about">About us</Link>
              </div> 
            </div>
        </header>);
}
export default Header;
