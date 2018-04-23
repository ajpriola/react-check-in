import { connect } from 'react-redux';
import CheckInListItemComponent from '../../components/checkin-list/checkin-list-item';
import { servePatient } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  admin: ownProps.admin
});

const mapDispatchToProps = dispatch => ({
  dispatch: (patient) => {
    dispatch(servePatient(patient));
  }
});

const CheckInListItem = connect(mapStateToProps, mapDispatchToProps)(CheckInListItemComponent);

export default CheckInListItem;
