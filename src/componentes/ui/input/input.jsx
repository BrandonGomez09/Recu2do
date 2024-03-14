import React from 'react';
import './input.css';
function Input (props){
  return (
    <>
    <input type="text" placeholder={props.placeholder} className={props.className} />
    </>
  );
};

export default Input;