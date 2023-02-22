import "./BankAccount.css";
import React from "react";

const BankAccount = () => {
    const [account, setAccount] = React.useState({
        name: "Fran",
        savings: 5000,
        funds: 1000,
    });
    
    const takeMoney = () => {
        const newAccount = JSON.parse(JSON.stringify(account));
        newAccount.savings = newAccount.savings -50;
        setAccount(newAccount);
    }

    const addMoney = () => {
        const newAccount = JSON.parse(JSON.stringify(account));
        newAccount.savings = newAccount.savings +50;
        setAccount(newAccount);
    }

    //REMEMBER!

/*
    const takeMoney = () => {
        account.savings = account.savings -50;
        setAccount(account);
    }
*/

    return (
        <div className="bankaccount-container">
            <p>Account holder is: {account.name}</p>
            <p>Account balance is: ${account.savings}</p>
            <p>Investment fund amount is: ${account.funds}</p>
            <div>
            <button className="bankaccount-container__btn" onClick={takeMoney}>Withdraw $50</button>
            <button className="bankaccount-container__btn" onClick={addMoney}>Add $50</button>
            </div>
            
        </div>
    );
}

export default BankAccount;

//react fragments - an empty tag is viable. <> </>