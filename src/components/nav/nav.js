import "./nav.css";
import {Link} from 'react-router-dom';
import logo from "../../assets/images/BrainFlix-logo.svg";


const Nav = () => {


    return (
        <header className="header">
            <section className="header__wrapper">
                <div className="header__logo-container">
                      <Link to="/"> 
                        <img className="header__logo" src={logo} alt="logo -BrainFlix">
                        </img>
                        </Link>
                </div>
                <div className="header__content-tablet">
                    <div className="header__controls">
                        <div className="header__search-container">
                            <input className="header__search" type="search" placeholder="Search" />
                        </div>
                        <div className="header__avatar">
                        </div>
                    </div>
                    <button className="header__upload-button"><Link className="header__upload-button--link" to= "/upload" >upload</Link></button>
                    <div className="header__avatar-tablet">
                    </div>
                </div>
            </section>
        </header>
    )

};
export default Nav;