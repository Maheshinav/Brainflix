import "./nav.css";
import logo from "../../assets/images/BrainFlix-logo.svg";


const Nav = () => {


    return (
        <header className="header">
            <section className="header__wrapper">
                <div className="header__logo-container">
                    <img className="header__logo" src={logo} alt="BrainFlix-Logo" />
                </div>
                <div className="header__content-tablet">
                    <div className="header__controls">
                        <div className="header__search-container">
                            <input className="header__search" type="search" placeholder="Search" />
                        </div>
                        <div className="header__avatar">
                        </div>
                    </div>
                    <button className="header__upload-button"> Upload
                    </button>
                    <div className="header__avatar-tablet">
                    </div>
                </div>
            </section>
        </header>
    )

};
export default Nav;