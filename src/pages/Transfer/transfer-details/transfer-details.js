import React from '.react';
import './transfer-details.css';

const TransferDetails = () => {
    return(
        <div className="details">
            <label>Amount</label>
            <input type="text" placholder="Enter Amount to withdraw" />
            <label>Wallet ID</label>
            <input type="text" placeholder="Enter wallet id" />
            <button className="continue">Continue</button>
        </div>
    )
}

export default TransferDetails;