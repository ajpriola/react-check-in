import { connect } from 'react-redux';
import CheckInFormComponent from '../../components/checkin-form';
import { addPatient } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (patient) => {
    dispatch(addPatient(patient));
  }
});

const CheckInForm = connect(() => ({}), mapDispatchToProps)(CheckInFormComponent);

export default CheckInForm;
