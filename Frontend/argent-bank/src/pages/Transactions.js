import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const mockTransactions = [
  {
    date: 'June 20th, 2020',
    description: 'Golden Sun Bakery',
    amount: '$5.00',
    balance: '$2082.79',
    type: 'Electronic',
    category: 'Food',
    notes: ''
  },
  {
    date: 'June 20th, 2020',
    description: 'Golden Sun Bakery',
    amount: '$10.00',
    balance: '$2087.79',
    type: 'Electronic',
    category: 'Food',
    notes: ''
  },
];

function Transactions() {
  const profile = useSelector((state) => state.profile.profile);
  const [transactions, setTransactions] = useState(mockTransactions);
  const [editIdx, setEditIdx] = useState(null);

  const handleEdit = (index) => {
    setEditIdx(index);
  };

  const handleSave = (index) => {
    // Logic to save the updated transaction
    setEditIdx(null);
  };

  const handleChange = (e, index, field) => {
    const newTransactions = [...transactions];
    newTransactions[index][field] = e.target.value;
    setTransactions(newTransactions);
  };

  return (
    <div className="main">
      <div className="balance-section bg-light p-4 text-center">
        <h2>Argent Bank Checking (x8349)</h2>
        <p className="balance">$2,082.79</p>
        <p>Available Balance</p>
      </div>
      <div className="transactions-table">
        <table className="table">
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
              <React.Fragment key={index}>
                <tr>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.balance}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>
                      <i className="fa fa-pencil"></i>
                    </button>
                  </td>
                </tr>
                {editIdx === index && (
                  <tr>
                    <td colSpan="5">
                      <div className="transaction-details">
                        <p>Transaction Type: {transaction.type}</p>
                        <p>
                          Category:
                          <input
                            type="text"
                            value={transaction.category}
                            onChange={(e) => handleChange(e, index, 'category')}
                          />
                          <button onClick={() => handleSave(index)}>
                            Save
                          </button>
                        </p>
                        <p>
                          Notes:
                          <input
                            type="text"
                            value={transaction.notes}
                            onChange={(e) => handleChange(e, index, 'notes')}
                          />
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
