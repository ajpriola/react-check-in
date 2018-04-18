import React from 'react';
import PropTypes from 'prop-types';
import CheckInListItem from './checkin-list-item';
import './checkin-list.css';

const CheckInList = ({ patients }) => (
  <div className="list-container">
    <ul>{patients.map(patient => <CheckInListItem key={patient.email} {...patient} />)}</ul>
  </div>
);

CheckInList.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CheckInList;
