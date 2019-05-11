import React, {Component} from 'react';
import Status from '../components/Status.js';
import './GameBox.css';

class GameBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }

    this.checkWinner = this.checkWinner.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createGrid = this.createGrid.bind(this);

  }

  checkWinner(){
     let winningLines =
       [
         ['0', '1', '2'],
         ['3', '4', '5'],
         ['6', '7', '8'],
         ['0', '3', '6'],
         ['1', '4', '7'],
         ['2', '5', '8'],
         ['0', '4', '8'],
         ['2', '4', '6'],
       ]
       this.checkMatch(winningLines)
  }

  checkMatch(winningLines){
    for (var i = 0; i < winningLines.length; i++) {
      const [a,b,c] = winningLines[i];
      let board = this.state.board;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        this.setState({winner: this.state.player})
      }
    }
  }

  handleClick(index){
    if(this.state.player && !this.state.winner){
      let newBoard = this.state.board;
      if(this.state.board[index] === null){
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === 'X' ? 'O':'X'
        })
        this.checkWinner()
      }
    }
  }

  setPlayer(player){
    this.setState({player} )
  }

  createGrid(){
    return this.state.board.map(
      (box, index) =>
        <div className="box" key={index} onClick={() => this.handleClick(index)}> {box} </div>
    )
  }

  render(){
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <Status
          player={this.state.player}
          setPlayer={(event) => {this.setPlayer(event)}}
          winner={this.state.winner}
        />
        <div className="board">
          {this.createGrid()}
        </div>
      </div>
    );
  }

}

export default GameBox;
