import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/navbar'>Navbar</NavLink>
        </li>
      </ul>
    </div>
  )
}