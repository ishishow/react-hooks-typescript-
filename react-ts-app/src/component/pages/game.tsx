import React, { useState } from 'react';
import Board from '../molecules/board';
const Game = () => {
  const [history, setHistory] = React.useState<
    Array<{
      squares: Array<any | null>;
    }>
  >([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i: number) => {
    const historyUntilCurrentStep = history.slice(0, stepNumber + 1);
    const current = historyUntilCurrentStep[historyUntilCurrentStep.length - 1]; 
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? (
      'o'
    ) : (
      'x'
    );
    setHistory(
      historyUntilCurrentStep.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(historyUntilCurrentStep.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status: any;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'o' : 'x');
  }

  return (
    <div style={gameStyle}>
      <div　style={midashi}>
        <h1>◯✕ゲーム</h1>
      </div>
      <div style={gameInfo}>
        <div style={statusStyle}>{status}</div>
        <ol>{moves}</ol>
      </div>
      <div style={boardStyle}>
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
    </div>
  );
};

const calculateWinner = (squares: Array<any | null>) => {
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
  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const gameInfo = {
  marginLeft: '20px',
};

const statusStyle = {
  marginBottom: '20px',
};

const gameStyle = {
  height: '800px',
  backgroundColor: '#def',
  position: 'relative' as 'relative' 
};

const boardStyle = {
  height: '140px',
  width: '180px',
  margin: 'auto',
  position: 'fixed' as 'fixed', 
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
};

const midashi = {
  position: 'relative' as 'relative',
  padding: '0.5em',
  background: '#a6d3c8',
  color: 'white',
  before: {
    position: 'absolute' as 'absolute',
    content: '',
    top: '100%',
    left: '0',
    border: 'none',
    borderBottom: 'solid 15px transparent',
    borderRight: 'solid 20px rgb(149, 158, 155)'
  }
}
export default Game;
