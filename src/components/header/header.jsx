import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/hyatt-house.svg"
import "./header.scss"

const Header = () => {
    return(<>
        <header className="header">
            <ul className="header__list">
                <li className="header__item">
                    <Link className="" to="/">
                        <img className="header__logo" src={LogoSvg} alt="Header logo photo" width={50} height={50} />
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/admin">
                        <button className="header__item__button">
                            Admin
                        </button>
                    </Link>
                </li>
            </ul>
        </header>
    </>)
}

export default Header;