import React from 'react';
import { Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Route exact path='/' render={() => 
            <>
              <Link to={'/favorites'} className="link">
                  <button className='logo-button'>Favorites</button>
              </Link>
              {/* <Link to={'/new'} className="link">
              <button className='logo-button' id='addReq'><img className='icon' src={addReq} alt='new request'></img>t</button>
              </Link> */}
            </>
          }/>
  )
}

export default Nav;