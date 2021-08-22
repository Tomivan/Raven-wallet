import React from 'react';
import Layout from '../../components/layout/layout';
import './dashboard.css';

const Dashboard = () => {
   return(
       <div>
           <Layout />
           <div className="dashboard">
               <div className="cards">
                   <div className="card">
                       <h4>Total Deposits</h4>
                       <div className="bottom">
                           <p>#1,398,000</p>
                           <img src="" alt="" />
                       </div>
                   </div>
                   <div className="card">
                       <h4>Total Transfers</h4>
                       <div className="bottom">
                           <p>#234,860</p>
                           <img src="" alt="" />
                       </div>
                   </div>
                   <div className="card">
                       <h4>Total Withdrawals</h4>
                       <div className="bottom">
                           <p>#530,000</p>
                           <img src="" alt="" />
                       </div>
                   </div>
                   <div className="card">
                       <h4>Wallet balance</h4>
                       <div className="bottom">
                           <p>#633,140</p>
                           <img src="" alt="" />
                       </div>
                   </div>
                </div>
                <table>
                   <thead>
                       <tr>
                           <th>Date</th>
                           <th>Time</th>
                           <th>Details</th>
                           <th>Status</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>21 Aug</td>
                           <td>14:22</td>
                           <td>Deposited #5,000 into wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>20 Aug</td>
                           <td>13:25</td>
                           <td>Withdrew #3,000 from Wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>20 Aug</td>
                           <td>13:23</td>
                           <td>Transferred #3,000 into Tomivan</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>1 Aug</td>
                           <td>12:02</td>
                           <td>Added #50,000</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
   ) 
}

export default Dashboard;