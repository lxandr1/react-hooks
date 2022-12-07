import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Try using react hooks, useCallback()");

  // useCallback can be use if you pass function as props

  // const returnComment = () => {
  //   return data;
  // }
  const returnComment = useCallback(() => {
    return data;
  }, [data]);

  return (
    <div className="App">
      <Child returnComment={returnComment}/>
      <br/>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <br/>

      {toggle && <h4>Toggle</h4>}
    </div>
  )
}