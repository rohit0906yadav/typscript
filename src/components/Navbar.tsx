import React from 'react';
import { Link } from 'react-router-dom';
const Navbar:React.FC =()=>{
    return(<>
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={''}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"conditionalRendering"}>conditionalRendering</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/functional'}>functional comp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to={'/passingProps'}>Passing props</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>)
}
export default Navbar;