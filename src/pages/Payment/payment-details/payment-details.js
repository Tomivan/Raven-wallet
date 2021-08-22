import React, { useState} from 'react';
import { Link } from '@reach/router';
import Modal from 'react-modal';
import './payment-details.css';
import Layout from '../../../components/layout/layout';

const PaymentDetails = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div>
            <Layout />
            <div className="details">
            <label>Amount</label>
            <input type="text" placholder="Enter Amount to withdraw" />
            <label>Card Number</label>
            <input type="number" placeholder="**** **** **** ***" />
            <label>Expiration Date</label>
            <input type="date" placeholder="mm/yyyy" />
            <label>CVC</label>
            <input type="number" placeholder="123" />
            <button className="continue" onClick={() => setModalIsOpen(true)}>Continue</button>
            <Modal className="bg-modal" isOpen={modalIsOpen}>
                <div className="warning">
                    <p><strong>Are you sure you want to proceed?</strong></p>
                    <p>Note that this action cannnot be undone</p>
                    <div className="buttons">
                        <button className="cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
                        <button className="confirm" 
                            onClick={() => setModalIsOpen(false)}>
                            <Link to="/complete" className="detail">Confirm</Link>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
        </div>
    )
}

export default PaymentDetails;