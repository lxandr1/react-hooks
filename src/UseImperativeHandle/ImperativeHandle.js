import { useRef } from "react";
import Button from "./Button"

function ImperativeHandle() {
  const buttonRef = useRef(null)
  console.log("buttonRef", buttonRef);
  return (
    <div>
      <button onClick={() => {
        buttonRef.current.alterToggle()
      }}>Button From Parrent</button>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default ImperativeHandle;