import { connect } from 'react-redux';
import PatientFormComponent from '../../components/patient-form';
import { addPatient } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (patient) => {
    dispatch(addPatient(patient));
  }
});

const mapStateToProps = (state, ownProps) => ({
  patient: state.serving,
  admin: ownProps.admin
});

const PatientForm = connect(mapStateToProps, mapDispatchToProps)(PatientFormComponent);

export default PatientForm;
