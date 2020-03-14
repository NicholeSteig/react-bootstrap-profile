import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";

function Navbar() {
    return (
        <Navbar bg="primary" variant="dark">
           <Link classname="navbar-brand" to="/">Nichole Steig</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link classname="navbar-brand" to="/portfolio">Portfolio</Link>
                <Link classname="navbar-brand" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbar;