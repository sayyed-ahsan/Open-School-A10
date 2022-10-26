import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} >
                            Link
                        </NavItem>
                        <NavItem eventKey={2}>
                            Link
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2}>
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>;

        </div>
    );
};

export default Header;