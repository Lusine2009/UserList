import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="header">
        <ul className="header-content">
          <li className="header-content-li">
            <Link className="header-content-li-link" to="/Home">Home</Link>
          </li>
          <li className="header-content-li">
            <Link className="header-content-li-link" to="/Login">Login</Link>
          </li>
          <li className="header-content-li"> 
            <Link className="header-content-li-link" to="/UserList">UserList</Link>
          </li>
          <li className="header-content-li">
            <Link className="header-content-li-link"  to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;