import React, { useEffect, useRef } from 'react';

const Login = () => {
  const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '0',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        color: 'transparent', 
  };
  const textStyle = {
    color: 'transparent',
    textShadow: '0 0 0 #000',
    opacity: 0,
    width: '200px',  
    height: '30px'  // To keep the textbox working 
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(inputRef.current?.value);
      buttonRef.current?.click();
    }
  };
  useEffect(() => { if (inputRef.current) inputRef.current.focus(); })

  // NOTE: you might want to render the textbox last
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={textStyle}
        onKeyDown={handleKeyDown}
      />
      <button
        ref={buttonRef}
        onClick={() => {
          // Do something -- pass to something redirect?
        }}
      >
      </button>
    </div>
  );
};

export default Login;
