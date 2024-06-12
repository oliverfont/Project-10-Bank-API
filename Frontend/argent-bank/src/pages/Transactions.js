import React from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';
import Dropdown from '../components/Dropdown';


const transactionsData = {
  checking: [
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$5.00', balance: '$2,082.79', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$10.00', balance: '$2,087.79', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$20.00', balance: '$2,097.79', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$30.00', balance: '$2,117.79', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$40.00', balance: '$2,147.79', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$50.00', balance: '$2,187.79', type: 'Electronic', category: 'Food', notes: '' },
  ],
  savings: [
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$10.00', balance: '$10,928.42', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$20.00', balance: '$10,948.42', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$30.00', balance: '$10,978.42', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$40.00', balance: '$11,018.42', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$50.00', balance: '$11,068.42', type: 'Electronic', category: 'Food', notes: '' },
  ],
  credit: [
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$20.00', balance: '$164.30', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$30.00', balance: '$194.30', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$40.00', balance: '$234.30', type: 'Electronic', category: 'Food', notes: '' },
    { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$50.00', balance: '$284.30', type: 'Electronic', category: 'Food', notes: '' },
  ],
};

function Transactions() {
  const location = useLocation();
  const { accountType, accountId } = location.state || { accountType: 'checking', accountId: '8349' };
  const transactions = transactionsData[accountType];

  return (
    <main className="main bg-custom">
      <div className="header">
        <p>Argent Bank {accountType.charAt(0).toUpperCase() + accountType.slice(1)} (x{accountId})</p>
        <p className="account-amount">{transactions[0].balance}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <section className="transactions">
        <h2 className="sr-only">Transactions</h2>        
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Dropdown key={index} transaction={transaction} accountType={accountType} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Transactions;
