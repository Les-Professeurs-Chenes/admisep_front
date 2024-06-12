import User from '../../models/User'
import TresoAsso from './components/TresoAsso'
import UserInfo from './components/UserInfo'
import UserNotifications from './components/UserNotifications'
import './User.css'

export default function Dashboard({
  user
} : {
  user: User
}) {

  const allAssoTresoProps = [
    {
      assoName: "ISEP Records",
      solde: 20,
      lastTransaction: "Transaction 1",
      lastTransactionAmount: -150,
      lastTransactionDestination: "Stars Music",
      lastTransactionDate: "25/03/2024"
    },
    {
      assoName: "ISEP Bands",
      solde: 50,
      lastTransaction: "Transaction 2",
      lastTransactionAmount: -200,
      lastTransactionDestination: "Stars Music",
      lastTransactionDate: "25/03/2024"
    },
    {
      assoName: "Ordre Du Malt (ODM)",
      solde: 100,
      lastTransaction: "Transaction 3",
      lastTransactionAmount: -250,
      lastTransactionDestination: "Stars Music",
      lastTransactionDate: "25/03/2024"
    }
  ]


  return (
    <>
      <div className="dashboard">
        <div className="account-details">
          
          <div className="user-info">
            <UserInfo user={user} />
          </div>
          <div className="notifications">
            <UserNotifications />
          </div>
        </div>

          <div className="status-treso">
            
            { allAssoTresoProps.map((assoTresoProps) => 
              <div className="treso-item">
                <TresoAsso assoTresoProps={assoTresoProps} />
              </div>
            )}
          </div>
      </div>
    </>
  )
}
