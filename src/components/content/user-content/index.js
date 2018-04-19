import React from 'react';
import CheckInList from '../../../containers/checkin-list';
import CheckInForm from '../../../containers/checkin-form';
import './user-content.css';

const UserContent = () => (
  <div className="user-content-container">
    <div className="content-section large">
      <h1 className="section-title">List</h1>
      <CheckInList />
    </div>
    <div className="content-section small">
      <h1 className="section-title">Form</h1>
      <CheckInForm />
    </div>
  </div>
);

export default UserContent;
