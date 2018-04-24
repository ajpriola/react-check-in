import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, List } from 'semantic-ui-react';
import CheckInListItem from '../../containers/checkin-list-item';
import { patientType } from '../../types';
import './checkin-list.css';

const CheckInList = props => (
  <Container fluid>
    <Header>Waiting List
      <Header.Subheader>
        {props.admin ? `There are currently ${props.patients.length} patients waiting.` : 'Please fill out the informational form and wait to be called.'}
      </Header.Subheader>
    </Header>
    {props.patients.length > 0 && <List divided relaxed>
      {props.patients.map(patient => (
        <CheckInListItem key={patient.id} patient={patient} admin={props.admin} />
      ))}
    </List>}
  </Container>
);

CheckInList.defaultProps = {
  admin: false
};

CheckInList.propTypes = {
  patients: PropTypes.arrayOf(patientType.isRequired).isRequired,
  admin: PropTypes.bool
};

export default CheckInList;
