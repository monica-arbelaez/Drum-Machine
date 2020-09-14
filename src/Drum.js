import React from 'react';
import DrumPad from './DrumPad';

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class Drum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          currentBank: bankOne,
          bankRef: 1,
          power: true,
          volume: 50,
          currentClip:'-'
        };

        this.handleAudioToggle = this.handleAudioToggle.bind(this);
        
    }

    handleAudioToggle(){
      this.setState({currentBank: this.state.bankRef === 1 ? bankTwo : bankOne,
        bankRef: this.state.bankRef === 1 ? 2 : 1
      });
    }
    

    render(){
        let beats = this.state.currentBank.map(x => 
            <DrumPad volume={this.state.volume} power={this.state.power} id={x.id} keyCode={x.keyCode} keyTrigger={x.keyTrigger} url={x.url}/>
        );

        return (
            <div id="drum-machine">
              <div className="container-fluid">
                <div className="row drum-pads-container">
                  <div className="col-md-6">
                    <div className="drum-pad-row row justify-content-md-start">{beats.slice(0,3)}</div>
                    <div className="drum-pad-row row justify-content-md-start">{beats.slice(3,6)}</div>
                    <div className="drum-pad-row row justify-content-md-start">{beats.slice(6,9)}</div>
                  </div>
                  <div className="col-md-6">
                    <div className="option row justify-content-md-center">
                      <button className={this.state.power ? "btn btn-success" : "btn btn-secondary"} id="toggleButton" onClick={ e => {this.setState({power: !this.state.power}); } }> Power </button>
                    </div>
                    <div className="option row justify-content-md-center">

                      <button className="btn btn-info" id="toggleButton" onClick={this.handleAudioToggle}>{ this.state.bankRef === 1 ? "Summer Heat" : "Chord"}</button>
                    </div>
                    <div className="option row justify-content-md-center">
		                  <input type="range" min={1} max={100} className="slider" id="volume" onChange={e => {this.setState({volume: e.target.value}); document.getElementById('clip-id').innerHTML = this.state.volume;}} value={this.state.volume}/>
                    </div>
                    <div id="display" className="option row justify-content-md-center current-clip">
                      <p id="clip-id" className="text-center">-</p>
                    </div>
                  </div>
                  </div>
              </div>

              
            </div>

        );
    }
}


export default Drum;