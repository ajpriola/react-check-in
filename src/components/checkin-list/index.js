import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckInListItem from '../../containers/checkin-list-item';
import { patientType } from '../../types';
import './checkin-list.css';

class CheckInList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: props.patients,
      admin: props.admin
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      patients: nextProps.patients,
      admin: nextProps.admin
    });
  }

  render() {
    return (
      <div className="list-container">
        <ul className="list">
          {this.state.patients.map(patient => (
            <CheckInListItem key={patient.email} patient={patient} admin={this.state.admin} />
          ))}
        </ul>
      </div>
    );
  }
}

CheckInList.defaultProps = {
  admin: false
};

CheckInList.propTypes = {
  patients: PropTypes.arrayOf(patientType.isRequired).isRequired,
  admin: PropTypes.bool
};

export default CheckInList;
