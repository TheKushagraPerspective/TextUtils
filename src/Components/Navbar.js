import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link to='/' className="nav-link">{props.homePage}</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className="nav-link">{props.aboutPage}</Link>
                </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            
            <div className="ms-3 form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light' } Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}



// in this we are specifying the data types of props like for title string should be there like that
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homePage: PropTypes.string.isRequired,
    aboutPage: PropTypes.string.isRequired
}


// defaultProps means if we haven't send any props/attributes just like we have sent title , homePage , title Page... and if we haven't sent these then by default the values of title , homePage , titlePage will be these values that we have written over there
Navbar.defaultProps = {
    title: 'Set title here using props...',
    homePage: 'Set home page here...',
    aboutPage: 'Set about page here...'
}