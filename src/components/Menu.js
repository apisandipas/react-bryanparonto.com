import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Menu extends React.Component {

    constructor(props){
        super(props);

        // bind methods used in JSX to component context
        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
 
    handleClick(event) {
        event.preventDefault();
        var sidebarWrapper = React.findDOMNode(this.refs.sidebarWrapper);
        $(sidebarWrapper).toggleClass("Sidebar--active");
    }

    closeMenu(event){
        var sidebarWrapper = React.findDOMNode(this.refs.sidebarWrapper);
        $(sidebarWrapper).removeClass("Sidebar--active");
    }

    render() {
        return (
            <div>
                <a onClick={this.handleClick} href="#" className="Sidebar-toggle Button Button--dark btn-lg toggle"><i className="glyphicon glyphicon-th-list"></i></a>
                <nav className="Sidebar-wrapper" ref="sidebarWrapper">
                    <ul className="Sidebar-nav">
                        <a id="menu-close" onClick={this.handleClick} href="#" className="Button Button--light btn-lg pull-right toggle"><i className="glyphicon glyphicon-remove"></i></a>
                        <li className="Sidebar-brand">
                            <a href="#top" >
                               Bryan Paronto
                            </a>
                        </li>
                        <li>
                            <Link to="home" onClick={this.closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" onClick={this.closeMenu}>About Me</Link>
                        </li>
                        <li>
                            <Link to="projects" onClick={this.closeMenu}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" onClick={this.closeMenu}>Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
