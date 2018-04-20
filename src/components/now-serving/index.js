import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
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
      <Header
        content="Now Serving"
        subheader={
          patient
            ? formatName(patient.firstName, patient.lastName, admin)
            : 'No patient being served'
        }
      />
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
