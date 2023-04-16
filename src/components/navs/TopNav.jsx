import React from 'react';
import {NavLink} from 'react-router-dom'

const TopNav = () => {
    return ( 
        <nav>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <ul>
                                    <li>
                                        <NavLink to="/"  > صفحه اصلی</NavLink>
                                        <NavLink to="#"  > درباره ما </NavLink>
                                        <NavLink to="#"  > تماس با ما </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="clientarea">
                                    {/* <div className="loggein ">
                                        <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a>
                                    </div> */}
                                    <div className="signin ">
                                        <i className="zmdi zmdi-account"></i>
                                        <NavLink to="/login" style={({isActive}) => ({color : isActive ? "lime" : ""})} > ورود </NavLink> / 
                                        <NavLink to="/register" style={({isActive}) => ({color : isActive ? "lime" : ""})} > عضویت </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
     );
}
 
export default TopNav;