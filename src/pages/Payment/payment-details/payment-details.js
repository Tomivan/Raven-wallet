import React from '.react';
import './payment-detail.css';

const PaymentDetails = () => {
    return(
        <div className="details">
            <label>Amount</label>
            <input type="text" placholder="Enter Amount to withdraw" />
            <label>Account Number</label>
            <input type="text" placeholder="Enter your Account Number" />
            <label>Bank</label>
            <input type="text" placeholder="Enter bank name" />
            <button className="continue">Continue</button>
        </div>
    )
}

export default PaymentDetails;