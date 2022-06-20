import { FiGithub } from 'react-icons/fi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { Link } from '@remix-run/react';

export default function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-300 rounded-xl top-[-8px] relative lg:w-[75vw] left-[12.5vw]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-xl">
                <AiOutlineAlignLeft />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a>Resume</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
            <Link to="/" className="btn btn-ghost normal-case text-xl">wxifu.</Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle text-lg">
                <FiGithub />
          </button>
        </div>
      </div>
    </div>
  );
}
