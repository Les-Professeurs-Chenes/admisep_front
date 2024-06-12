import { faArrowAltCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import User from '../../../models/User'

export default function Settings({
  user,
  triggerEffect,
  setTriggerEffect,
} : {
  user: User
  triggerEffect: boolean
  setTriggerEffect: (triggerEffect: boolean) => void
}) {

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTriggerEffect(!triggerEffect);
  };

  const handleDeleteUser = () => {
    localStorage.removeItem("token");
    setTriggerEffect(!triggerEffect);
  };


  
    return (
      <>
        <div className="flex flex-col p-2 justify-center items-center">
          <div className="card w-full max-w-xl bg-base-200 p-4">
            <h1 className="text-xl font-bold">Settings</h1>
            <div className="text-start">
              <div className="py-4">
                <div className="settings-general-info">
                  <p>First Name: {user.firstName}</p>
                  <p>Last Name: {user.lastName}</p>
                  <p>Email: {user.mail}</p>
                </div>
              </div>
              <div className="py-4">
                <div className="settings-actions">
                  <button className="btn btn-error mt-2" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    Logout
                  </button>
                  <br />
                  {!(user.firstName=="Admin" && user.lastName=="Admin") && ( <button className="btn btn-error mt-2" onClick={handleDeleteUser}>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete Account
                  </button>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
