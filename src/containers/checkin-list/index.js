import { connect } from 'react-redux';
import CheckInListComponent from '../../components/checkin-list';

const CheckInList = connect(
  state => ({
    patients: state.patients
  }),
  {}
)(CheckInListComponent);

export default CheckInList;
