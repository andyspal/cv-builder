import React from 'react';

const Input = ({id, type ,text, pattern, onChange, value, error, max, min, onKeyDown, }) => {
  
  const labelStyle = {
    paddingBottom: '.6rem',
    fontSize: '1.3rem',
    fontWeight: '500',
  }
  const inputStyle = {
    border: 'none',
    marginBottom: '.5rem',
    padding: '.6rem .4rem',
    fontSize: '1rem',
    fontWeight: '400'
  }
  return (
    <>
        <label for={id} style={labelStyle}>{text}</label>
        <input type={type} id={id} name={id} pattern={pattern} onChange={onChange} value={value} style={inputStyle} max={max} min={min} onKeyDown={onKeyDown}/>
        {error && <span className="error">{error}</span>}
    </>
  )
}

export default Input;
