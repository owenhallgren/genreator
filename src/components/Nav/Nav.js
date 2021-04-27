import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({error}) => {
  return (
    <nav>
      {error && 
        <p>{error}</p>
      }
      <Route exact path='/' render={() => 
            <>
              <Link to={'/favorites'} className="link">
                  {!error && <button className='nav-button'>Favorites</button>}
              </Link>
              {/* <Link to={'/new'} className="link">
              <button className='logo-button' id='addReq'><img className='icon' src={addReq} alt='new request'></img>t</button>
              </Link> */}
            </>
          }/>
          <Route exact path='/favorites' render={() => 
            <>
              <Link to={'/'} className="link">
                  <button className='nav-button' id='dashBoard'>Home</button>
              </Link>
              {/* <Link to={'/new'} className="link">
                  <button className='logo-button' id='addReq'><img className='icon' src={addReq} alt='new request'></img></button>
              </Link> */}
            </>
          }/>
    </nav>
    
  )
}

export default Nav;