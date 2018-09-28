import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../button'

function formatTime(time){
    var min = Math.floor(time/600);
    var sec = Math.floor(time%600/10);
    if (sec<10)
        return `${min}:0${sec}`;
    else
        return `${min}:${sec}`;
}

class Timer extends Component{

    componentWillReceiveProps(nextProps){
        const currentProps = this.props
        if ((!currentProps.isPlaying && nextProps.isPlaying && !currentProps.isPaused && !nextProps.isPaused)
                || (currentProps.isPlaying && nextProps.isPlaying && currentProps.isPaused && !nextProps.isPaused)){
            try {
                clearInterval(this.state.timeInterval);
            }
            catch(err){};
            const timeInterval = setInterval(()=> {
                currentProps.addSecond()
            }, 100);

            this.setState({
                timeInterval
            });
        } else if((currentProps.isPlaying && !nextProps.isPlaying) || (currentProps.isPlaying && !currentProps.isPaused && nextProps.isPaused)) {
            // Stop Interval
            clearInterval(this.state.timeInterval);
        }
    }

    render(){
        console.log(this.props)
        const { isPlaying, elapsedTime, isPaused, timeDuration, startTimer, restartTimer, toggleTimer} = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timeDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    { (!isPlaying && !isPaused) ? ( <Button iconName="play-circle" onPress={startTimer}/> ) : null }
                    { ( isPlaying &&  isPaused) ? ( <Button iconName="play-circle" onPress={toggleTimer}/> ) : null }
                    { (isPlaying  && !isPaused) ? ( <Button iconName="pause-circle" onPress={toggleTimer}/> ) : null }
                    <Button iconName="stop-circle" onPress={restartTimer}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CE0B24',
    },
    upper:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lower:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 70
    },
    time:{
        color: '#FFFFFF',
        fontSize: 120,
        fontWeight: '100'
    },
});

export default Timer;