import "./Auction.css";

const Auction = ({name, addBid}) => {
    return (
        <button onClick={addBid} className="auction-box">{name}</button>
    )

}

export default Auction;