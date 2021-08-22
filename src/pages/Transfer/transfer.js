import React from 'react';
import Layout from '../../components/layout/layout';
import './transfer.css';

const Transfer = () => {
   return(
       <div>
           <Layout />
           <div className="transfers">
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
                  <button className="button">Transfer Funds</button>
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
                           <td>Transferred #3,000 into Tomivan</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>20 Aug</td>
                           <td>12:02</td>
                           <td>Transferred #3,000 to Tomivan</td>
                           <td><span className="failed">Failed</span></td>
                       </tr>
                       <tr>
                           <td>01 Aug</td>
                           <td>10:56</td>
                           <td>Transferred #10,000 to Lolo</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                       <tr>
                           <td>12 Jul</td>
                           <td>14:22</td>
                           <td>Transferred #7,000 to James</td>
                           <td><span className="success">Successful</span></td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
   ) 
}

export default Transfer;