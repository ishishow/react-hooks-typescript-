import React from 'react';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';

type SquareProps = {
  value: any | null;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  const checkMaruBatu = (flag:string | null) => {
    if (flag === null){
       return null
    }else{
       if (flag === 'o'){
          return <RadioButtonUncheckedRoundedIcon color='error'/>
       }else{
          return <ClearRoundedIcon color='primary'/>
       }
   }
  }
  return (
      <div style={squareStyle}>     
        <button onClick={props.onClick}>
          {checkMaruBatu(props.value)}
        </button>
      </div>
  );
};
const squareStyle = {
  backGround: '#fff',
  border: '1px solid #999',
  float: 'left' as 'left',
  fontSize: '24px',
  fontWeight: 'bold' as 'bold',
  lineHeight: '34px',
  height: '34px',
  marginRight: '1px',
  marginTop: '1px',
  padding: 0,
  textAlign: 'center' as 'center',
  width: '36px',
};
export default Square;


