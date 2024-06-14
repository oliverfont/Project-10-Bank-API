import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import '../index.css';

function Transactions() {
  const transactions = useSelector(state => state.transactions.transactions);
  const location = useLocation();
  const { accountType, accountId } = location.state || { accountType: 'checking', accountId: '8349' };
  const transactionsForAccount = transactions[accountType] || [];

  return (
    <main className="main bg-custom">
      <div className="header">
        <p>Argent Bank {accountType.charAt(0).toUpperCase() + accountType.slice(1)} (x{accountId})</p>
        <p className="account-amount">{transactionsForAccount[0]?.balance || '$0.00'}</p>
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
            {transactionsForAccount.map((transaction, index) => (
              <Dropdown key={index} transaction={transaction} accountType={accountType} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Transactions;
