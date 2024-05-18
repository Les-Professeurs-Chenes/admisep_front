import { faArrowUpRightFromSquare, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import './UserNotifications.css'

export default function UserNotifications() {

    const [notifications, setNotifications] = useState([
        {
            title: "Notification 1",
            description: "Contenu de la notification 1"
        },
        {
            title: "Notification 2",
            description: "Contenu de la notification 2"
        },
        {
            title: "Notification 3",
            description: "Contenu de la notification 3"
        },
        {
            title: "Notification 4",
            description: "Contenu de la notification 4"
        },
        {
            title: "Notification 5",
            description: "Contenu de la notification 5"
        },
        {
            title: "Notification 6",
            description: "Contenu de la notification 6"
        },
        {
            title: "Notification 7",
            description: "Contenu de la notification 7"
        },
    ]);

    /*
     * Function that handles the click on the notification
     */
    function handleClick() {
        return;
    }

    return (
        <>
            <div className="card account-card">
                <div className="card-header">
                    <div className="title">
                        <h2 className="card-title">
                            <FontAwesomeIcon icon={faBell}/>
                            Notifications
                        </h2>
                    </div>
                    
                    <div onClick={handleClick} className="go-to-link">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </div>
                </div>
                <div className="card-body">
                    {notifications.map((notification) => 
                        <div className="notification">
                            <div className="notification-content">
                                <div className="notification-title">{notification.title}</div>
                                <div className="notification-description">{notification.description}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
