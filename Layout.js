
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
     
            <>
               <header>
            <h1>Angol nyelvtanulás!</h1>
                     </header>
                <nav className="navbar bg-light navbar-light">
                   
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Gépel</Link>
                            </li>
                         
                            <li className="nav-item">
                                <Link to="/rendez">Rendez</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/valaszto">Választó</Link>
                            </li>
                        </ul>
                 
                </nav>
                <Outlet />
            </>

            )
};


            export default Layout