import React from 'react';
import  Square  from '../atom/square';
import Grid from '@material-ui/core/Grid';

type BoardProps = {
  squares: Array<any | null>;
  onClick: (i: number) => void;
};
const Board = (props: BoardProps) => {
  const renderSquare = (i: number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div style={board}>
      <Grid container alignItems="center">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Grid>
      <Grid container alignItems="center">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Grid>
      <Grid container alignItems="center">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Grid>
    </div>
  );
};

const board = {
  marginLeft: '25px',
  marginTop: '5px',
};

export default Board;
