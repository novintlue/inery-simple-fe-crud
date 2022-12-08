import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>CRUD RPC</h1>
      <hr />
      <div className="links">
        <NavLink to="/add" className="link" activeClassName="active">
          Add
        </NavLink>
        <span class="tab"></span>
        <NavLink to="/read" className="link" activeClassName="active">
          Read
        </NavLink>
        <span class="tab"></span>
        <NavLink to="/update" className="link" activeClassName="active">
          Update
        </NavLink>
        <span class="tab"></span>
        <NavLink to="/delete" className="link" activeClassName="active">
          Delete
        </NavLink>
      </div>
    </header>
  );
};

export default Header;