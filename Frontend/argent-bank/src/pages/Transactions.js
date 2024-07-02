import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import '../index.css';

function Transactions() {
  // Utilisation de useSelector pour accéder aux transactions du store Redux
  const transactions = useSelector(state => state.transactions.transactions);
  
  // Utilisation de useLocation pour obtenir les paramètres passés via la navigation
  const location = useLocation();
  const { accountType, accountId } = location.state || { accountType: 'checking', accountId: '8349' };
  
  // Filtrage des transactions pour le type de compte spécifique
  const transactionsForAccount = transactions[accountType] || [];

  return (
    <main className="main bg-custom">
      <div className="header">
        <p>Argent Bank {accountType.charAt(0).toUpperCase() + accountType.slice(1)} (x{accountId})</p>
        {/* Affichage du solde disponible */}
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
            {/* Itération sur les transactions pour le compte spécifique et rendu des lignes de transaction */}
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
