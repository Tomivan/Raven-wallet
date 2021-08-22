import { Link } from '@reach/router';
import React from 'react';
import Layout from '../../components/layout/layout';
import './withdraw.css';

const Withdrawal = () => {
   return(
       <div>
           <Layout />
           <div className="withdrawals">
              <div className="top">
                  <div className="cards-box">
                      <div className="card">
                          <h4>Wallet balance</h4>
                          <div className="bottom">
                              <p>#633,140</p>
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
                  </div>
                  <button className="button"><Link to="/withdrawal-details" className="detail">Withdraw Funds</Link></button>
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
                           <td>20 Aug</td>
                           <td>13:23</td>
                           <td>Withdrew #3,000 from Wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>20 Aug</td>
                           <td>12:02</td>
                           <td>Withdrew #3,000 from Wallet</td>
                           <td><span className="failed">Failed</span></td>
                       </tr>
                       <tr>
                           <td>01 Aug</td>
                           <td>10:56</td>
                           <td>Withdrew #5,000 from Wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>24 Jul</td>
                           <td>14:22</td>
                           <td>Withdrew #2,000 from Wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
   ) 
}

export default Withdrawal;