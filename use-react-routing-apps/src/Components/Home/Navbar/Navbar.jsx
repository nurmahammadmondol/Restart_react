import { NavLink } from "react-router";
import '../../../App.css'

const Navbar = () => {

  return (
    <nav>
      <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <button className="btn btn-ghost text-xl">Hello Routing</button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-3 items-center">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/dashbord'>Dashbord</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/users'>Users</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <input
              type="text"
              placeholder="Search"
              className="input w-64 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
