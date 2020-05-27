import React, { useState }  from 'react';

function InputComponent(props) {
  const[inputValue, setInputValue] = useState("");

  const onChangeFunction = (event) =>{
    const inputValue = event.target.value;
    setInputValue(inputValue);
  }

  // const uppercase = (string) => {
  //   const resultValueInput = 
  // }

  // const lowercase = () => {
    
  // }

  return (
        <div>
          <input 
            type="text"
            onChange={onChangeFunction}
          ></input>
          <div></div>
        </div>
  );
}

export default InputComponent;
