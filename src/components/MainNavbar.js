import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, Button, FormGroup, FormControl, Glyphicon, InputGroup} from 'react-bootstrap';

class MainNavbar extends Component {
    render(){
        return(
            <div className="navbar-default">
                <Navbar className="navbar-default" fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <strong id="navbar-title">PrintBoard</strong>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>

        )
    }
}

export default Navbar;

