import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './Dashboard/dashboard';
import Payment from './Payment/payment';
import Transfer from './Transfer/transfer';
import Withdrawal from './Withdrawal/withdraw';
import WithdrawalDetails from './Withdrawal/withdraw-details/withdraw-details';
import PaymentDetails from './Payment/payment-details/payment-details';
import TransferDetails from './Transfer/transfer-details/transfer-details';
import Complete from './complete/complete';

const Pages = () => {
    return(
        <Router>
            <Dashboard path="/" />
            <Payment path="/payments" />
            <PaymentDetails path="/payment-details" />
            <Transfer path="/transfers" />
            <TransferDetails path="/transfer-details" />
            <Withdrawal path="/withdrawal" />
            <WithdrawalDetails path="/withdrawal-details" />
            <Complete path="/complete" />
        </Router>
    )
}
export default Pages;