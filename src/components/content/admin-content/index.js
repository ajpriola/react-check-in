import React from 'react';
import CheckInList from '../../../containers/checkin-list';
import PatientDetail from '../../../containers/patient-detail';
import '../content.css';
import './admin-content.css';

const AdminContent = () => (
  <div className="row">
    <div className="content-section large">
      <h1 className="section-title">List</h1>
      <CheckInList />
    </div>
    <div className="content-section small">
      <h1 className="section-title">Detail</h1>
      <PatientDetail />
    </div>
  </div>
);

export default AdminContent;
