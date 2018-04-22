import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'semantic-ui-react';
import { patientType } from '../../../types';
import { formatDate, formatName } from '../../../util';

class CheckInListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { patient: props.patient, admin: props.admin };

    this.handleAdmit = this.handleAdmit.bind(this);
  }

  handleAdmit() {
    this.props.dispatch(this.state.patient);
  }

  render() {
    const patient = this.state.patient;
    const admin = this.state.admin;
    return (
      <List.Item key={patient.id}>
        {admin && (
          <List.Content floated="right">
            <Button onClick={this.handleAdmit}>See Next</Button>
          </List.Content>
        )}
        <List.Content>
          <List.Header>{formatName(patient.firstName, patient.lastName, admin)}</List.Header>
          {admin && (
            <div>
              <List.Description>{patient.email}</List.Description>
              <List.Description>{patient.description}</List.Description>
              <List.Description>{formatDate(patient.date)}</List.Description>
            </div>
          )}
        </List.Content>
      </List.Item>
    );
  }
}

CheckInListItem.defaultProps = {
  admin: false
};

CheckInListItem.propTypes = {
  patient: patientType.isRequired,
  admin: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

export default CheckInListItem;
