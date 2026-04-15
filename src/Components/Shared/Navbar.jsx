import React from 'react';
import { GoGraph } from 'react-icons/go';
import { MdOutlineWatchLater } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="btn btn-ghost text-xl text-green-900 font-bold">
            <img src={logo} alt="Keen Keeper Logo" />
          </div>
        </div>
        <div>
          <ul className="menu menu-horizontal p-0 gap-3">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'btn btn-success' : 'btn btn-ghost'}`
                }
              >
                <RiHome2Line />
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `${isActive ? 'btn btn-success' : 'btn btn-ghost'}`
                }
              >
                <MdOutlineWatchLater />
                TIMELINE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `${isActive ? 'btn btn-success' : 'btn btn-ghost'}`
                }
              >
                <GoGraph />
                STATS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;