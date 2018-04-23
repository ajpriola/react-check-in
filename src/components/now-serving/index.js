import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { patientType } from '../../types';
import { formatName } from '../../util';
import './now-serving.css';

const NowServing = props => (
  <Header
    content="Now Serving"
    subheader={
      props.patient
        ? formatName(props.patient.firstName, props.patient.lastName, props.admin)
        : 'No patient being served'
    }
  />
);

NowServing.defaultProps = {
  patient: null,
  admin: false
};

NowServing.propTypes = {
  patient: patientType,
  admin: PropTypes.bool
};

export default NowServing;
