import { useState } from "react";

const StateTutorial = () => {
  // let counter = 0;
  // const [counter, setCounter] = useState(0)

  // const increment = () => {
    // counter = counter + 1;
    // console.log(counter);
    // setCounter(counter + 1);
  // }
 
  // return <div>
  //   {counter}
  //   <button onClick={increment}>+</button>
  // </div>

  const [inputValue, setInputValue] = useState("Rayond");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div>
      <input placeholder="Enter something..." onChange={onChange}/>
      {inputValue}
    </div>
  )
}  

export default StateTutorial;