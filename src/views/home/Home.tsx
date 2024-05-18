import { useState } from "react";
import MenuComponent from "../../components/menu/MenuComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import { faGauge, faPeopleGroup, faWallet, faMoneyBill, faFolder, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Dashboard from '../../views/user/Dashboard'
import './Home.css'
import Profile from "../user/Profile";
import Clubs from "../user/clubs/Clubs";
import Treso from "../user/treso/Treso";
import Cvec from "../user/treso/Cvec";
import Subventions from "../user/treso/Subventions";
import Messages from "../user/messages/Messages";
import Settings from "../user/settings/Settings";
import ClubSettings from "../user/settings/ClubSettings";


export default function Home() {
    const [currentTab, setCurrentTab] = useState(localStorage.getItem('currentTab') || 'Dashboard')
    const [menu, setMenu] = useState(true)

    const tabs = [
        { name: 'Dashboard', icon: faGauge , view: <Dashboard/>, subItems: [] },
        { name: 'Profile', icon: faUser, view: <Profile/>, subItems: [] },
        { name: 'Clubs', icon: faPeopleGroup, view: <Clubs/>, subItems: [] },
        { name: 'Tréso', icon: faWallet, view: null, subItems: [
            { name: 'Général', icon: faMoneyBill, view: <Treso/> },
            { name: 'CVEC', icon: faFolder, view: <Cvec/> },
            { name: 'Subventions BDE', icon: faFolder, view: <Subventions/> },
        ] },
        { name: 'Messages', icon: faEnvelope, view: <Messages/>, subItems: [] },
        { name: 'Settings', icon: faCog, view: null, subItems: [
            { name: 'Général', icon: faCog, view: <Settings/> },
            { name: 'Association', icon: faUser, view: <ClubSettings/> },
        ] },
    ]
    
    function getTabView(tabName: string) {
        // return the rendered component of the tab (can be either a tab from tabs or a subItem from a tab)
        localStorage.setItem('currentTab', tabName)

        const tab = tabs.find(tab => tab.name == tabName)
        if (tab && tab.view != null) {
            return tab.view
        } else {
            for (let i = 0; i < tabs.length; i++) {
                let subItem = tabs[i].subItems.find(subItem => subItem.name == tabName)
                if (subItem && subItem.view != null) {
                    return subItem.view
                }
            }
        }
        return <Dashboard/>
    }
    

    return (
        <>
            <div className="home">
                <NavbarComponent menu={menu} setMenu={setMenu} />

                <div className="home-container">
                    <div className="home-menu">
                        <MenuComponent state={menu} tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                    </div>
                    <div className="home-content">
                        { getTabView(currentTab) }
                    </div>
                </div>
            </div>
        </>
    )
}
