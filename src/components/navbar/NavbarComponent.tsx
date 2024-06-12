import './NavbarComponent.css'
import logo from '../../assets/logo.png'
import admisep from '../../assets/admisep.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import User from '../../models/User'

export default function NavbarComponent({
    menu,
    setMenu,
    user,
} : {
    menu: boolean;
    setMenu: (menu: boolean) => void;
    user: User;
}) {

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className={menu ? "menu-section active" : "menu-section"} onClick={() => {setMenu(!menu)}}>
                    <FontAwesomeIcon icon={ menu ? faX : faBars } />
                </div>
            </div>
            <div className="navbar-center">
                <img src={admisep} alt="logo" className="center-logo" />
            </div>
            <div className="navbar-end">
                <div className="profile-section">
                    <span className="username">{ user.firstName } { user.lastName }</span>
                    <img src={logo} alt="logo" className="profile-image" />
                </div>
            </div>
        </div>
    )
}
