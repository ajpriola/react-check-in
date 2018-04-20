import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { patientType } from '../../../types';
import { formatName } from '../../../util';
import './checkin-list-item.css';

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
    const email = this.state.patient.email;
    const admin = this.state.admin;
    return (
      <div className="list-item-container">
        <div className="list-item-group-vertical">
          <h1 className="list-item-title">
            {formatName(patient.firstName, patient.lastName, admin)}
          </h1>
          {admin && <h2 className="list-item-subtitle">{email}</h2>}
        </div>
        {admin && (
          <div className="list-item-group-vertical">
            <button className="admit-button" onClick={this.handleAdmit}>
              Admit
            </button>
          </div>
        )}
      </div>
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
