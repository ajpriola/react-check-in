import { connect } from 'react-redux';
import NowServingComponent from '../../components/now-serving';

const mapStateToProps = (state, ownProps) => ({
  patient: state.serving,
  admin: ownProps.admin
});

const NowServing = connect(mapStateToProps, {})(NowServingComponent);

export default NowServing;
