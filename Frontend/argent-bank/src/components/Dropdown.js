import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../features/transactions/transactionsSlice';

function Dropdown({ transaction, accountType, index }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(transaction.category);
  const [notes, setNotes] = useState(transaction.notes);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = () => {
    const updatedTransaction = { ...transaction, category, notes };
    dispatch(updateTransaction({ accountType, index, updatedTransaction }));
    setIsOpen(false);
  };

  return (
    <>
      <tr className="transaction-item" onClick={toggleDropdown}>
        <td className='cellule'>{transaction.date}</td>
        <td className='cellule'>{transaction.description}</td>
        <td className='cellule'>{transaction.amount}</td>
        <td className='cellule'>{transaction.balance}</td>
      </tr>
      {isOpen && (
        <tr className="transaction-details">
          <td colSpan="4">
            <div>
              <p className='description'>Transaction Type: {transaction.type}</p>
              <div className="transaction-edit">
                <label>
                  Category:
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="_">_</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                </label>
                <label>
                  Notes:
                  <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
                </label>
              </div>
              <div className="transaction-actions">
                <button onClick={handleSave}>Save</button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default Dropdown;
