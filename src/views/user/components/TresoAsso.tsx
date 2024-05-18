import { faArrowUpRightFromSquare, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TresoAsso.css'

type TresoAssoProps = {
    assoName: string, 
    solde: number, 
    lastTransaction: string, 
    lastTransactionAmount: number, 
    lastTransactionDestination: string, 
    lastTransactionDate: string
}

export default function TresoAsso(
    {
        assoTresoProps
    } : { 
        assoTresoProps : TresoAssoProps 
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
                            <FontAwesomeIcon icon={faMoneyBill}/>
                            Trésorerie: { assoTresoProps.assoName }
                        </h2>
                    </div>
                    
                    <div onClick={handleClick} className="go-to-link">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </div>
                </div>

                <div className="card-body">

                    <div className="treso-info-container">
                        <h3 className="subtitle">Solde actuel</h3>
                        <p> { assoTresoProps.solde } € </p>
                    </div>

                    <div className="treso-details">
                        <h3 className="subtitle">Details</h3>
                        <div className="treso-transaction">
                            <div className="transaction-name">{ assoTresoProps.lastTransaction }</div>
                            <div className="transaction-amount">{ assoTresoProps.lastTransactionAmount }€ </div>
                            <div className="transaction-destination">{ assoTresoProps.lastTransactionDestination }</div>
                            <div className="transaction-date">{ assoTresoProps.lastTransactionDate }</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
