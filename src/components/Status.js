import React, {Component} from 'react';
import Player from './ChoosePlayer.js'

class Status extends Component {

  handleSetPlayer(event){
    this.props.setPlayer(event)
  }

  displayWinner(){
    if(this.props.winner){
      return <h2>The winner is {this.props.winner}</h2>
    }else{
      return  this.props.player ? " " :  <Player player={(event) => this.handleSetPlayer(event)}/>
    }
  }

  render(){
    return <span>{this.displayWinner()}</span>
  }

}
export default Status;
