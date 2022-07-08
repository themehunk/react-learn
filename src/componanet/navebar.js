import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class NaveBar extends React.Component{
    render(){
        return(<> 
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
          <a className="nav-link"  href='/'> home </a>

        </li>
        <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/contactus">contactus</Link>

        <a className="nav-link"  href='/contactus'> contactus </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/viewlist">View List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>)
    }
}

export default NaveBar;