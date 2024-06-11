import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "../../../models/User";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../../constants/api";

export const ShowProfile = () => {
  const [userData, setUserData] = useState({
    moodleId: "",
    firstName: "",
    lastName: "",
    mail: "",
    promo: "",
    birthDate: "",
    clubMember: "",
  });

  useEffect(() => {
    // Récupération des informations de l'utilisateur connecté depuis l'API
    axios
      .get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const {
          moodleId,
          firstName,
          lastName,
          mail,
          promo,
          birthDate,
          clubMember,
        } = response.data;
        setUserData({
          moodleId,
          firstName,
          lastName,
          mail,
          promo,
          birthDate,
          clubMember,
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

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
          <div className="user-info-container">
            <div className="row">
              <div className="col">
                <h3 className="subtitle">Prenom</h3>
                <p>{userData.firstName}</p>
              </div>
              <div className="col">
                <h3 className="subtitle">Nom</h3>
                <p>{userData.lastName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="subtitle">Email</h3>
                <p>{userData.mail}</p>
              </div>
              <div className="col">
                <h3 className="subtitle">Date de naissance</h3>
                <p>{userData.birthDate}</p>
              </div>
            </div>

            <br />
            <hr />
            <div>
              <h3 className="subtitle">Promo</h3>
              <p>{userData.promo}</p>
            </div>
            <div>
              <h3 className="subtitle">Mes associations/clubs:</h3>
              <p>ISEP Bands (Président)</p>
              <p>ISEP Records (Vice-président)</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faPen} /> Modifier mes informations
          </button>
        </div>
      </div>
    </>
  );
};
