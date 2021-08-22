import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './Dashboard/dashboard';
import Payment from './Payment/payment';
import Transfer from './Transfer/transfer';
import Withdrawal from './Withdrawal/withdraw';

const Pages = () => {
    return(
        <Router>
            <Dashboard path="/" />
            <Payment path="/payments" />
            <Transfer path="/transfers" />
            <Withdrawal path="/withdrawal" />
        </Router>
    )
}
export default Pages;