import React from "react";
import { NavLink } from "react-router-dom";


const Navigation=()=>{

 
    return(
        <nav >
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/">Home</NavLink>
                               
                            </li>
                            <li>
                                <NavLink to="/solar">Solar</NavLink>
                            </li>
                            <li>
                            <NavLink to="/Cc">cc camera</NavLink>
                                
                            </li>
                            <li>
                            <NavLink to="/about">About us</NavLink>

                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className='nav-label'>Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                <a href="mailto:primary@bricksroot.com">Office</a>
                            </li>
                            <li>
                                <a href="mailto:enquiry@bricksroot.com">Support</a>
                            </li>

                            
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Headquarter</li>
                                <li>Ring Road,shiridi sai nagar</li>
                                <li>pl.no-39</li>
                                <li>vizianagaram.Andhrapradesh,India</li>

                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li><a href="tel:917799432208">91-7799432208</a></li>                               
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li><a href="tel:917799432208">Privacy and Cookies</a></li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default Navigation;