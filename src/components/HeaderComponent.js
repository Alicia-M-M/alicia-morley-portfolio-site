import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar light sticky="top" expand="md">
                <div className="container-fluid">
                    <NavbarBrand className="mr-auto" tag={NavLink} to={'/mainpage'}>ALICIA MORLEY</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto" >
                            <NavItem >
                                <NavHashLink className="nav-link" smooth to="/mainpage/#top">
                                    HOME
                                    </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink className="nav-link" to="/mainpage/#about_id" scroll={el => { el.scrollIntoView(true); window.scrollBy(0, (window.innerWidth >= 764 ? -158 : -276)) }}>
                                    ABOUT
                                </NavHashLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/work">
                                    WORK
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/contactme">
                                    CONTACT
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;