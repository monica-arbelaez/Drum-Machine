import React from 'react';

class DrumPad extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    handleKeyPress(e){
        if(this.props.power && e.keyCode === this.props.keyCode){
            this.playSound();
        }
    }

    playSound(){
        let pad = document.getElementById(this.props.keyTrigger);
        let display = document.getElementById('clip-id');
        pad.volume = this.props.volume / 100;
        pad.currentTime = 0;
        display.innerHTML = this.props.id;
        pad.play();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }


    render(){
        const inactiveStyle = {boxShadow: '2px 2px grey'}
        return(
            <div id={this.props.id} className="drum-pad col col-md-3 text-center btn btn-secondary" onClick={this.playSound} style={inactiveStyle}>
                <audio className="clip" id={this.props.keyTrigger} src={this.props.url}></audio>
                {this.props.keyTrigger}
            </div>
        );
    }
}

export default DrumPad;