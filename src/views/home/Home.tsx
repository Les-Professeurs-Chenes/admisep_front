import { useEffect, useState } from "react";
import MenuComponent from "../../components/menu/MenuComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import {
  faGauge,
  faPeopleGroup,
  faWallet,
  faMoneyBill,
  faFolder,
  faEnvelope,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Dashboard from "../../views/user/Dashboard";
import "./Home.css";
import Profile from "../user/Profile";
import CreateClubs from "../user/clubs/CreateClubs";
import Clubs from "../user/clubs/Clubs";
import Treso from "../user/treso/Treso";
import Cvec from "../user/treso/Cvec";
import Subventions from "../user/treso/Subventions";
import Messages from "../user/messages/Messages";
import Settings from "../user/settings/Settings";
import ClubSettings from "../user/settings/ClubSettings";
import { getUserByToken } from "../../helpers/User";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab") || "Dashboard"
  );
  const [menu, setMenu] = useState(true);
  const [user, setUser] = useState<User>(User.empty());
  const [triggerEffect, setTriggerEffect] = useState(false);
  const navigate = useNavigate();



  const tabs = [
    { name: "Dashboard", icon: faGauge, view: <Dashboard user={user} />, subItems: [] },
    { name: "Profile", icon: faUser, view: <Profile user={user} setUser={setUser} />, subItems: [] },
    { name: "Clubs", icon: faPeopleGroup, view: <Clubs user={user} />, subItems: [] },
    { name: "Create Clubs", icon: faPeopleGroup, view: <CreateClubs />, subItems: [] },
    {
      name: "Tréso",
      icon: faWallet,
      view: null,
      subItems: [
        { name: "Général", icon: faMoneyBill, view: <Treso  user={user}  /> },
        { name: "CVEC", icon: faFolder, view: <Cvec user={user} /> },
        { name: "Subventions BDE", icon: faFolder, view: <Subventions  user={user} /> },
      ],
    },
    { name: "Messages", icon: faEnvelope, view: <Messages  user={user} />, subItems: [] },
    {
      name: "Settings",
      icon: faCog,
      view: null,
      subItems: [
        { name: "General", icon: faCog, view: <Settings user={user} triggerEffect={triggerEffect} setTriggerEffect={setTriggerEffect} /> },
        { name: "Association", icon: faUser, view: <ClubSettings user={user}  /> },
      ],
    },
  ];

  useEffect(() => {
    isConnected();
  }, [triggerEffect]);


  async function isConnected() {
    const tempUser = await getUserByToken();
    setUser(tempUser);
    const user_logged_in = (tempUser.id !== undefined);
    if (!user_logged_in) {
      navigate("/Login");
    }
  }

  function getTabView(tabName: string) {
    // return the rendered component of the tab (can be either a tab from tabs or a subItem from a tab)
    localStorage.setItem("currentTab", tabName);

    const tab = tabs.find((tab) => tab.name == tabName);
    if (tab && tab.view != null) {
      return tab.view;
    } else {
      for (let i = 0; i < tabs.length; i++) {
        let subItem = tabs[i].subItems.find(
          (subItem) => subItem.name == tabName
        );
        if (subItem && subItem.view != null) {
          return subItem.view;
        }
      }
    }
    return <Dashboard user={user} />;
  }

  return (
    <>
      <div className="home">
        <NavbarComponent menu={menu} setMenu={setMenu} user={user}  />

        <div className="home-container">
          <div className="home-menu">
            <MenuComponent
              state={menu}
              tabs={tabs}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </div>
          <div className="home-content">{getTabView(currentTab)}</div>
        </div>
      </div>
    </>
  );
}
