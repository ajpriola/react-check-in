import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import CheckInListItem from '../../containers/checkin-list-item';
import { patientType } from '../../types';
import './checkin-list.css';

const CheckInList = props => (
  <List divided relaxed>
    {props.patients.map(patient => (
      <CheckInListItem key={patient.id} patient={patient} admin={props.admin} />
    ))}
  </List>
);

CheckInList.defaultProps = {
  admin: false
};

CheckInList.propTypes = {
  patients: PropTypes.arrayOf(patientType.isRequired).isRequired,
  admin: PropTypes.bool
};

export default CheckInList;
