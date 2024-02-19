import React from 'react';

const Input = ({id, type ,text, pattern, onChange, value}) => {
  const styleSheet = {
    border: 'none'
  }
  return (
    <>
        <label for={id}>{text}</label>
        <input type={type} id={id} name={id} pattern={pattern} onChange={onChange} value={value} style={styleSheet} />
    </>
  )
}

export default Input;
