import { faArrowUpRightFromSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UserInfo.css'
import User from "../../../models/User";


export default function UserInfo({
    user
} : {
    user: User
}) {
    function handleClick() {
        return;
    }

    return (
        <>
            <div className="card account-card">
                <div className="card-header">
                    <div className="title">
                        <h2 className="card-title">
                            <FontAwesomeIcon icon={faUser}/>
                            Mes informations
                        </h2>
                    </div>
                    
                    <div onClick={handleClick} className="go-to-link">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="user-info-container">
                        <div>
                            <h3 className="subtitle">Nom et prénom</h3>
                            <p>{user.firstName} {user.lastName}</p>
                        </div>
                        <div>
                            <h3 className="subtitle">Promo</h3>
                            <p>{user.promo ?? 'N/A'}</p>
                        </div>
                        <div>
                            <h3 className="subtitle">Mes associations/clubs:</h3>
                            <p>ISEP Bands</p>
                            <p>ISEP Records</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
