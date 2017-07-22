import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hello from '../components/Hello.jsx';
import * as SettingsActions from '../actions/settings';

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
