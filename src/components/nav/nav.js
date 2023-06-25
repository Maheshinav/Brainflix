/* eslint-disable no-unused-vars */
import logo from "../../assets/images/BrainFlix-logo.svg";
import "../../assets/images/upload.svg";
import "../../assets/images/search.svg";
import "./nav.css";



const Nav = () => {

    return (

        <header >
            <div className="header" >
                <div className="header__container">
                    <div className="header__logo-container">
                        <img className="header__logo" src={logo} alt="logo -BrainFlix">
                        </img>
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
                        <button className="header__button">upload</button>
                        <div className="header__avatar-tablet "></div>
                    </div>

                </div>
            </div>

        </header>


    )

}
export default Nav;