import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "../../../models/User";

export default function ShowProfile(
    {
        user,
        modifyProfile
    } :
    {
        user: User
        modifyProfile?: () => void,
    }
) {
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
                </div>
                <div className="card-body">
                    <div className="user-info-container">
                        <div className="row">
                            <div className="col">
                                <h3 className="subtitle">Prenom</h3>
                                <p>Axel</p>
                            </div>
                            <div className="col">
                                <h3 className="subtitle">Nom</h3>
                                <p>JOSEPH-ANTOINE</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3 className="subtitle">Email</h3>
                                <p>axeljosephantoine@gmail.com</p>
                            </div>
                            <div className="col">
                                <h3 className="subtitle">Date de naissance</h3>
                                <p>22/05/2002</p>
                            </div>
                        </div>
                        
                        <br />
                        <hr />
                        <div>
                            <h3 className="subtitle">Promo</h3>
                            <p>2023</p>
                        </div>
                        <div>
                            <h3 className="subtitle">Mes associations/clubs:</h3>
                            <p>ISEP Bands (Président)</p>
                            <p>ISEP Records (Vice-président)</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={modifyProfile} className="btn btn-primary">
                        <FontAwesomeIcon icon={faPen}/>  Modifier mes informations
                    </button>
                </div>
            </div>
        </>
    )
}
