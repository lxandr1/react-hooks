// UseReff for manipulate DOM element

import { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    // console.log(inputRef.current.value);
    const checkValue = inputRef.current.value;
    console.log(checkValue);
    if (checkValue == "") {
      inputRef.current.focus();
    } else {
      inputRef.current.value = null;
    }
  }

  return (
    <div>
      <h1>Rayond</h1>
      <input type="text" placeholder="Ex..." ref={inputRef}/>
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default RefTutorial;
