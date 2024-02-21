import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { NavLink } from 'react-router-dom';
const Sidenav = () => {
  return (
    <div className='sidenav'>
      <ul>
        <li>
            <NavLink to="/">
                <CiHome />
            </NavLink>
        </li>
        <li>
            <NavLink to="/projects">
                <FaProjectDiagram />
            </NavLink>
        </li>
        <li>
            <NavLink to="/me">
                <SiAboutdotme />
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidenav;
