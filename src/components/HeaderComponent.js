import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
            <Navbar light className="bg-white" sticky="top" expand="md">
                <div className="container-fluid">
                    <NavbarBrand className="mr-auto" href="/home">ALICIA MORLEY</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto" >
                            <NavItem className="px-2">
                                <NavLink className="nav-link" to="/home">
                                    HOME
                                    </NavLink>
                                {/* <a href="#home_id">
                                    HOME</a> */}
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    ABOUT
                                    </NavLink> */}

                                {/* <a href="#about_id">
                                    ABOUT</a> */}
                            {/* </NavItem> */}
                            <NavItem className="px-2">
                                <NavLink className="nav-link" to="/work">
                                    WORK
                                </NavLink>
                            </NavItem>
                            <NavItem className="px-2">
                                <NavLink className="nav-link" to="/contactus">
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