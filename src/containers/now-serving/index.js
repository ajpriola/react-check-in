import { connect } from 'react-redux';
import NowServingComponent from '../../components/now-serving';

const NowServing = connect(
  (state, ownProps) => ({
    patient: state.serving,
    admin: ownProps.admin
  }),
  {}
)(NowServingComponent);

export default NowServing;
