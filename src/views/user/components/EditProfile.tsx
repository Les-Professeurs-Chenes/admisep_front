import { faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent } from "react";
import * as userHelper from "../../../helpers/User";
import { useState } from "react";

export default function ShowProfile({
    user,
    setUser,
    modifyProfile
} : {
    user: any,
    setUser?: any,
    modifyProfile?: () => void
}
) {

    const [firstname, setFirstname] = useState(user.firstName);
    const [lastname, setLastname] = useState(user.lastName);
    const [email, setEmail] = useState(user.mail);
    const [birthdate, setBirthdate] = useState(user.birthDate);
    const [promo, setPromo] = useState(user.promo);
    
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log("Submited profile update form")
        const userData = {
            id: user.id,
            firstName: firstname,
            lastName: lastname,
            mail: email,
            birthDate: birthdate,
            promo: promo
        }
        const updatedUser = await userHelper.updateUser(userData);
        setUser(updatedUser);
        if(modifyProfile) modifyProfile();
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
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} datatype="x-www-form-urlencoded">
                        <div className="user-info-container">
                            <div className="row">
                                <div className="col">
                                    <h3 className="subtitle">Prenom</h3>
                                    <input type="text" name="firstname" placeholder="Entrez votre prénom" defaultValue={user.firstName} onChange={(e) => setFirstname(e.target.value)} />
                                </div>
                                <div className="col">
                                    <h3 className="subtitle">Nom</h3>
                                    <input type="text" name="lastname" placeholder="Entrez votre nom" defaultValue={user.lastName} onChange={(e) => setLastname(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h3 className="subtitle">Email</h3>
                                    <input type="email" name="email" placeholder="Entrez votre email" defaultValue={user.mail} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col">
                                    <h3 className="subtitle">Date de naissance</h3>
                                    <input type="date" name="birthdate" defaultValue={user.birthDate ?? new Date()}  onChange={(e) => setBirthdate(new Date(e.target.value))} />
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="subtitle">Promo</h3>
                                <input type="number" name="promo" placeholder="Entrez votre promo" defaultValue={user.promo ?? ''} onChange={(e) => setPromo(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faCheck}/>  Soumettre
                    </button>
                </div>
            </div>
        </>
    )
}
