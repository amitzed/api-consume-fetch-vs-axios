import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1>Home</h1>
      </Link>
      <Link to="/axios" style={{textDecoration: 'none'}}>
        <h1>Axios Version</h1>
      </Link>
      <Link to="/fetch" style={{textDecoration: 'none'}}>
        <h1>Fetch Version</h1>
      </Link>
      <hr/>
    </div>
  )
}

export default Header;
