import React from 'react';
import M from 'materialize-css';
import {Link} from 'react-router-dom';
import logopath from "../components/logo.png";
import '../css/Header.css';
class Header extends React.Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 200 });
        let slidemenu=document.querySelectorAll(".sidenav");
        M.Sidenav.init(slidemenu,{inDuration: 300, outDuration: 200 }); 
       let coll=document.querySelectorAll(".collapsible");
       M.Collapsible.init(coll,{});
    }
      
  
    render() {
        return (
            <div>
                <ul id="mobile-menu" className="sidenav white-text" >

                    <li><Link to="/account/login/" className="waves-effect white-text">Login</Link></li>
                    <li><Link to="/event/" className="waves-effect white-text">Events</Link></li>
                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li className="active">
                                <Link to="/" className="collapsible-header waves-effect white-text">SIGs<i className="material-icons white-text ">arrow_drop_down</i></Link>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <Link to="/sig/Catalyst/" className="waves-effect white-text">
                                                Catalyst
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Charge/" className="waves-effect white-text">
                                                Charge
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Chronicle/" className="waves-effect white-text">
                                                Chronicle
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Clutch/" className="waves-effect white-text">
                                                Clutch
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Concrete/" className="waves-effect white-text">
                                                Concrete
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Create/" className="waves-effect white-text">
                                                Create
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Credit/" className="waves-effect white-text">
                                                Credit
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/sig/Crypt/" className="waves-effect white-text">
                                                Crypt
                                    </Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="white-text" href="/team/">Our Team</Link></li>
                    <li><a href="https://istenitk.wordpress.com/" className="white-text" target="blank">Blog</a></li>
                </ul>
                <ul id="user-action" className="dropdown-content ">
                    <li>
                        <Link to="/account/edit/" className="waves-effect white-text">
                            Edit Profile
                </Link>
                    </li>
                    <li>
                        <Link to="/account/change_password/" className="waves-effect white-text">
                            Change Password
                </Link>
                    </li>
                    <li>
                        <Link to="/account/logout/" className="waves-effect white-text">
                            Logout
                </Link>
                    </li>
                </ul>
                <ul id="event-action" className="dropdown-content">
                    <li>
                        <Link to="/event/" className="waves-effect white-text">
                            View Events
                </Link>
                    </li>
                    <li>
                        <Link to="/event/add/" className="waves-effect white-text">
                            Add Event
                </Link>
                    </li>
                </ul>

                <ul id="sig-action" className="dropdown-content frontsig">
                    <li>
                        <Link to="/sig/Catalyst/" className="waves-effect white-text catalyst">
                            Catalyst
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Charge/" className="waves-effect white-text">
                            Charge
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Chronicle/" className="waves-effect white-text">
                            Chronicle
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Clutch/" className="waves-effect white-text">
                            Clutch
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Concrete/" className="waves-effect white-text">
                            Concrete
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Create/" className="waves-effect white-text">
                            Create
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Credit/" className="waves-effect white-text">
                            Credit
                </Link>
                    </li>
                    <li>
                        <Link to="/sig/Crypt/" className="waves-effect white-text">
                            Crypt
                </Link>
                    </li>
                </ul>
                <div className="navbar-fixed">
                <nav style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <div className="nav-wrapper " style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                        <Link to="/" className="brand-logo">
                            <img width="75" src={logopath} alt="" />
                            
                            
                            
                      </Link>
                        <Link to="/" data-target="mobile-menu" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>

                                <Link to="/account/login/">
                                    Login
                            </Link>
                            </li>


                            <li>

                                <Link to="/event/">
                                    Events
                            </Link>

                            </li>

                            <li>

                            </li>
                            <li>
                                <Link className="dropdown-trigger" href="/" data-target="sig-action">
                                    SIGs
                            <i className="material-icons right">
                            arrow_drop_down 
                            </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/team/">
                                    Our Team
                        </Link>
                            </li>
                            <li>
                                <a href="https://istenitk.wordpress.com/" target="blank">
                                    Blog
                        </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>

            </div>





        );
    }
}
export default Header;