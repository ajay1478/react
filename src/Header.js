import React from 'react'
import {FaAngleDown,FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>

            {/* Start second navigation */}

            <div className="container-fluid main_header">
                <div className="row">
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <Link to="/"><img src={require('./image/logo.png')}></img></Link>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <FaAlignJustify className="toggle_icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 first_menu">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <Link to="/"> Home </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Pages <FaAngleDown />
                                        </a>
                                        <ul class="second_menu">
                                            <li><a href="#"> Service </a></li>
                                            <li><a href="#"> Gallery </a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Service
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./Gallery.js">
                                            <Link to="/Gallery"> Gallery </Link>
                                        </a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-info" type="submit">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* End second navigation */}

        </>
    )
}

export default Header;