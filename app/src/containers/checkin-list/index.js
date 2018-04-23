import { connect } from 'react-redux';
import CheckInListComponent from '../../components/checkin-list';

const CheckInList = connect(
  (state, ownProps) => ({
    patients: state.patients,
    admin: ownProps.admin
  }),
  {}
)(CheckInListComponent);

export default CheckInList;
