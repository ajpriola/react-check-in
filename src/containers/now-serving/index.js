import { connect } from 'react-redux';
import NowServingComponent from '../../components/now-serving';

const NowServing = connect(
  state => ({
    patient: state.serving
  }),
  {}
)(NowServingComponent);

export default NowServing;
