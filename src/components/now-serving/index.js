import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './now-serving.css';

class NowServing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: props.patient
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        patient: nextProps.patient
      });
    }
  }

  render() {
    const patient = this.state.patient;

    return (
      <div className="serving-container">
        <h1 className="serving-title">Now Serving</h1>
        <h2 className="serving-label">{patient != null ? patient.name : '---'}</h2>
      </div>
    );
  }
}

NowServing.defaultProps = {
  patient: null
};

NowServing.propTypes = {
  patient: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default NowServing;
