import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeList from './Ingredients';
import InstructionList from './Instructions';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {squares : Array(9).fill(null)
        ,
        isNext :  true};
    }

    updateBoard(index) {
        if (calculateWinner(this.state.squares) || this.state.squares[index]) {
            return;
        }
        this.setState(prevstate=>{
            const squares = prevstate.squares;
            squares[index] = prevstate.isNext ? 'X' : 'O';
            return  {squares : squares, isNext: !prevstate.isNext};
        })
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.updateBoard(i)}/>
    }

    render() {
        let status = `Next player: ${this.state.isNext ? 'X' : 'O'}`;
        const winner = calculateWinner(this.state.squares);
        if (winner){
            status = `Winner is ${winner}`
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


// ========================================



ReactDOM.render(
    <Board />,
    document.getElementById('root')
);


/*
const recipes = ['lb Salmon', '1 cup Pine Nuts', '2 cups Butter Lettuce', '1 Yellow Squash', '1/2 cup Olive Oil', '3 cloves of Garlic']

const Instructions =   ['Preheat the oven to 350 degrees.',
    'Spread the olive oil around a glass baking dish.',
    'Add the salmon, garlic, and pine nuts to the dish.',
    'Bake for 15 minutes.',
    'Add the yellow squash and put back in the oven for 30 mins.',
    'Remove from oven and let cool for 15 minutes. Add the lettuce and serve.'];
ReactDOM.render(

    React.createElement('section', {id : 'baked-salmon1'},  React.createElement(RecipeList, {recipes : recipes}, null),  React.createElement(InstructionList, {Instructions : Instructions}, null)),
    document.getElementById('ex4')
)



function ListItem(props) {
return <li>{props.value}</li>;
}

function ProfessorList(props) {
const professors = props.professors;
const listItems = professors.map((prof) => <ListItem key={prof} value={prof} /> );
return (<ul>{listItems}</ul>);
}




const professors = ['Jean', 'Martin', 'Nathan', 'Sandrine', 'Marine', 'Assia']

ReactDOM.render(
<ProfessorList professors={professors} />,
document.getElementById('professor')
)
*/