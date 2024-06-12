import React, { useState } from 'react';
import '../index.css';

function Dropdown({ transaction }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transaction-item">
      <div className="transaction-summary" onClick={toggleDropdown}>
        <p className='cellule'>{transaction.date}</p>
        <p className='cellule'>{transaction.description}</p>
        <p className='cellule'>{transaction.amount}</p>
        <p className='cellule'>{transaction.balance}</p>
      </div>
      {isOpen && (
        <div className="transaction-details">
          <p className='description'>Transaction Type: {transaction.type}</p>
          <div className="transaction-edit">
            <label>
              Category:
              <select defaultValue={transaction.category}>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </label>
            <label>
              Notes:
              <input type="text" defaultValue={transaction.notes} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
