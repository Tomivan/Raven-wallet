import React, { useState } from 'react';
import Modal from "react-modal";
import { Link } from '@reach/router';
import './transfer-details.css';
import Layout from '../../../components/layout/layout';

const TransferDetails = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
       <div>
           <Layout />
           <div className="details">
            <label>Amount</label>
            <input type="text" placholder="Enter Amount to withdraw" />
            <label>Wallet ID</label>
            <input type="text" placeholder="Enter wallet id" />
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

export default TransferDetails;