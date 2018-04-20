import { connect } from 'react-redux';
import PatientDetailComponent from '../../components/patient-detail';

const PatientDetail = connect(
  state => ({
    patient: state.serving
  }),
  {}
)(PatientDetailComponent);

export default PatientDetail;
