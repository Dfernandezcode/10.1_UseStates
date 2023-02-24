import "./Auction.css";
import React from "react";

const Auction = ({name, addBid}) => {
    return (
        <button onClick={addBid} className="auction-box">{name}</button>
    )

}

export default Auction;