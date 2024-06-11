import { faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowProfile({
  user,
  setUser,
  modifyProfile,
}: {
  user: any;
  setUser?: any;
  modifyProfile?: () => void;
}) {
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Submit");
  }

  return (
    <>
      <div className="card account-card">
        <div className="card-header">
          <div className="title">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faUser} />
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
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Entrez votre prénom"
                    value="Axel"
                  />
                </div>
                <div className="col">
                  <h3 className="subtitle">Nom</h3>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Entrez votre nom"
                    value="JOSEPH-ANTOINE"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3 className="subtitle">Email</h3>
                  <input
                    type="email"
                    name="email"
                    placeholder="Entrez votre email"
                    value="axeljosephantoine@gmail.com"
                  />
                </div>
                <div className="col">
                  <h3 className="subtitle">Date de naissance</h3>
                  <input type="date" name="birthdate" value="2002-05-22" />
                </div>
              </div>

              <br />
              <hr />
              <div>
                <h3 className="subtitle">Promo</h3>
                <input
                  type="number"
                  name="promo"
                  placeholder="Entrez votre promo"
                  value="2023"
                />
              </div>
              <div>
                <h3 className="subtitle">Mes associations/clubs:</h3>
                <p>ISEP Bands (Président)</p>
                <p>ISEP Records (Vice-président)</p>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={modifyProfile}>
            <FontAwesomeIcon icon={faCheck} /> Soumettre
          </button>
        </div>
      </div>
    </>
  );
}
