import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand , NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import logo from '../../assets/niles-icon.png';

/**Header and navbar component */

function Header() {
    return (
        <>
            <Navbar
                color="light"
                expand="md"
                full
                light
            >
                <NavbarBrand href="/">
                    <img className="nav-icon" src={logo} alt="Niles-HRM-Icon" />
                    
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { return true}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/our-services">Our Services</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact-us">Contact Us</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/clients">Our Clients</Link>
                        </NavItem>
                   
                    </Nav>
                </Collapse>
            </Navbar>

        </>

    )
}

export default Header
