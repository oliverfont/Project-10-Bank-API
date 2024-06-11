import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../features/user/profileSlice';
import { Navigate } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import EditProfile from '../components/EditProfile';
import '../index.css';

function Profile() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.token);
  const profile = useSelector(state => state.profile.profile);
  const status = useSelector(state => state.profile.status);
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isAuthenticated && token) {
      dispatch(fetchProfile(token));
    }
  }, [isAuthenticated, token, dispatch]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No profile data found</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (firstName, lastName) => {
    dispatch(updateProfile({ token, profileData: { firstName, lastName } }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
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
        <ProfileHeader firstName={profile?.firstName || ''} onEdit={handleEdit} />
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
