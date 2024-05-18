import './NavbarComponent.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function NavbarComponent({
    menu,
    setMenu
} : {
    menu: boolean,
    setMenu: (menu: boolean) => void
}) {
  return (
    <div className="navbar">
        <div className="navbar-start">
            <div className={menu ? "menu-section active" : "menu-section"} onClick={() => {setMenu(!menu)}}>
                <FontAwesomeIcon icon={ menu ? faX : faBars } />
            </div>
        </div>
        <div className="navbar-center">
                Adm'ISEP
        </div>
        <div className="navbar-end">
            <div className="profile-section">
                <span className="username">Axel Joseph-Antoine</span>
                <img src={logo} alt="logo" className="profile-image" />
            </div>
        </div>
    </div>
  )
}
