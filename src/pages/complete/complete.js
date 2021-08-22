import { Link } from '@reach/router';
import React from 'react';
import Layout from '../../components/layout/layout';
import './complete.css';

const Complete = () => {
    return (
        <div>
            <Layout />
            <div className="complete">
                <p>Transaction Complete! Return to dashboard</p>
                <button className="button dashboard-button">
                    <Link to="/" className="detail">Go to Dashboard</Link> 
                </button>
            </div>
        </div>
    )
}

export default Complete;