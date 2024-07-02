import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../features/user/profileSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import EditProfile from '../components/EditProfile';
import '../index.css';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Récupération des données du store Redux
  const token = useSelector(state => state.login.token);
  const profile = useSelector(state => state.profile.profile);
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  
  // État local pour gérer le mode édition
  const [isEditing, setIsEditing] = useState(false);

  // Effectuer une action après le rendu du composant
  useEffect(() => {
    if (isAuthenticated && token) {
      dispatch(fetchProfile(token));
    }
  }, [isAuthenticated, token, dispatch]);

  // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Gérer le passage en mode édition
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Gérer la sauvegarde des modifications du profil
  const handleSave = (firstName, lastName) => {
    dispatch(updateProfile({ token, profileData: { firstName, lastName } }));
    setIsEditing(false);
  };

  // Annuler le mode édition
  const handleCancel = () => {
    setIsEditing(false);
  };

  // Naviguer vers la page des transactions
  const viewTransactions = (accountType, accountId) => {
    navigate('/transactions', { state: { accountType, accountId } });
  };

  return (
    <main className="main bg-custom">
      {isEditing ? (
        <EditProfile
          firstName={profile?.firstName || ''}
          lastName={profile?.lastName || ''}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <ProfileHeader 
          firstName={profile?.firstName || ''} 
          lastName={profile?.lastName || ''} 
          onEdit={handleEdit} 
        />
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={() => viewTransactions('checking', '8349')}>View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={() => viewTransactions('savings', '6712')}>View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={() => viewTransactions('credit', '8349')}>View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
