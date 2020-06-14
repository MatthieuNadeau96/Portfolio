import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class Header extends React.Component {
    render() {

        return (
            <ReactBootStrap.Navbar bg="white" expand="md" sticky="top" className="navigationBar">
                <Link to='/'><ReactBootStrap.Navbar.Brand>Logo</ReactBootStrap.Navbar.Brand></Link>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav className="">
                        <li><Link className="nav-link" to='/about'>About</Link></li>
                        <li><Link className="nav-link" to='/apps'>Apps</Link></li>
                        <a className="nav-link" target="_blank" href="https://docs.google.com/document/d/1mOd70mZQglLXk9x_rW2e6FfhwsUCsk2LXfPPBjV9QxI/edit?usp=sharing">Resume</a>
                        <a className="nav-link" href="mailto:matthieunadeau96@gmail.com">Contact</a>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar >
        );
    }
}
