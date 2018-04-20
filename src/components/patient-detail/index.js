import React, { Component } from 'react';
import { patientType } from '../../types';
import { formatName } from '../../util';
import './patient-detail.css';

class PatientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: props.patient
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      patient: newProps.patient
    });
  }

  render() {
    const patient = this.state.patient;
    return (
      patient && (
        <div className="detail-container">
          <div className="detail-section">
            {formatName(patient.firstName, patient.lastName, true)}
          </div>
          <div className="detail-section">{patient.email}</div>
          <div className="detail-section">{patient.description}</div>
        </div>
      )
    );
  }
}

PatientDetail.defaultProps = {
  patient: null
};

PatientDetail.propTypes = {
  patient: patientType
};

export default PatientDetail;
