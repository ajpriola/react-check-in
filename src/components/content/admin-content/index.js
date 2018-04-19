import React from 'react';
import CheckInList from '../../../containers/checkin-list';
import '../content.css';
import './admin-content.css';

const AdminContent = () => (
  <div className="content-container">
    <div className="content-section large">
      <h1 className="section-title">List</h1>
      <CheckInList admin />
    </div>
  </div>
);

export default AdminContent;
