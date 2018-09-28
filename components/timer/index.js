import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators as pomodoroActions } from '../../reducer'

function mapStateToProps(state){
  const { isPlaying, elapsedTime, timeDuration, isPaused } = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration,
    isPaused 
  };
}

function mapDispatchToProps(dispatch){
  return {
    startTimer: bindActionCreators(pomodoroActions.startTimer, dispatch),    
    restartTimer: bindActionCreators(pomodoroActions.restartTimer, dispatch),  
    addSecond: bindActionCreators(pomodoroActions.addSecond, dispatch),
    toggleTimer: bindActionCreators(pomodoroActions.toggleTimer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);