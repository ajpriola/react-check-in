import { connect } from 'react-redux';
import NowServingComponent from '../../components/now-serving';

const NowServing = connect(
  state => ({
    currentlyServing: state.currentlyServing
  }),
  {}
)(NowServingComponent);

export default NowServing;
