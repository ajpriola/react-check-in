import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { patientType } from '../../types';
import { formatName } from '../../util';
import './now-serving.css';

class NowServing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: props.patient,
      admin: props.admin
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        patient: nextProps.patient,
        admin: nextProps.admin
      });
    }
  }

  render() {
    const patient = this.state.patient;
    const admin = this.state.admin;
    return (
      <div className="serving-container">
        <h1 className="serving-title">Now Serving</h1>
        {patient && (
          <h2 className="serving-label">
            {formatName(patient.firstName, patient.lastName, admin)}
          </h2>
        )}
      </div>
    );
  }
}

NowServing.defaultProps = {
  patient: null,
  admin: false
};

NowServing.propTypes = {
  patient: patientType,
  admin: PropTypes.bool
};

export default NowServing;
