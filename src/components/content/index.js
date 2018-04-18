import React from 'react';
import CheckInList from '../checkin-list';
import CheckInForm from '../../containers/checkin-form';
import './content.css';

const Content = () => (
  <div className="content">
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


export default Content;
