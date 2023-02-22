import "./BankAccount.css";
import React from "react";

const BankAccount = () => {
    const [account, setAccount] = React.useState({
        name: "Fran",
        savings: 5000,
        funds: 1000,
    });
    return (
        <div className="bankaccount-container">
            <p>Account holder is: {account.name}</p>
            <p>Account balance is: {account.savings}</p>
            <p>Investment fund amount is: {account.funds}</p>
        </div>
    );
}

export default BankAccount;

//react fragments - an empty tag is viable. <> </>