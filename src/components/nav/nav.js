
import logo from "../../assets/images/BrainFlix-logo.svg";
import {Link} from 'react-router-dom';
import "./nav.css";

const Nav = () => {

    return (

        <header >
            <div className="header" >
                <div className="header__container">
                    <div className="header__logo-container">
                        <Link to="/"> 
                        <img className="header__logo" src={logo} alt="logo -BrainFlix">
                        </img>
                        </Link>
                    </div>
                    <div className="header__content-tablet">
                        <div className="header__search-wrap">
                            <input
                                className="header__search-input"
                                type="search"
                                placeholder="Search"
                            />
                            <div className="header__avatar "></div>
                        </div>
                        <button className="header__button"><Link className="header__button--link" to= "/upload" >upload</Link></button>
                        <div className="header__avatar-tablet "></div>
                    </div>

                </div>
            </div>
        </header>
    )

}
export default Nav;