import './User.css'
import './components/UserInfo.css'
import ShowProfile from "./components/ShowProfile";
import EditProfile from "./components/EditProfile";
import { useState } from 'react'
import User from '../../models/User';

// Component for user profile page
export default function Profile({
  user,
  setUser
} : {
  user: User,
  setUser: (user: User) => void
}) {

  const [modify, setModify] = useState(false)


  return (
    <>
      <div className="profile">
        <div className="account-details">
          <div>
            {modify ? (
              <EditProfile modifyProfile={() => setModify(!modify)} user={user} setUser={setUser} />
            ) : (
              <ShowProfile modifyProfile={() => setModify(!modify)} user={user} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
