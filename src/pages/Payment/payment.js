import React from 'react';
import Layout from '../../components/layout/layout';
import './payment.css';

const Payment = () => {
   return(
       <div>
           <Layout />
           <div className="payments">
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
                          <h4>Total Deposits</h4>
                          <div className="bottom">
                              <p>#1,398,000</p>
                              <img src="" alt="" />
                          </div>
                      </div>
                  </div>
                  <button className="button">Deposit Funds</button>
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
                           <td>21 Aug</td>
                           <td>14:02</td>
                           <td>Deposited #5,000 into wallet</td>
                           <td><span className="failed">Failed</span></td>
                       </tr>
                       <tr>
                           <td>17 Aug</td>
                           <td>10:56</td>
                           <td>Deposited #10,000 into wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>13 Aug</td>
                           <td>14:22</td>
                           <td>Deposited #7,000 into wallet</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
   ) 
}

export default Payment;