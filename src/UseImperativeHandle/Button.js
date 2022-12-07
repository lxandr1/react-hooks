import { forwardRef, useImperativeHandle, useState } from "react"

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)
  console.log(props, ref)

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    }
  }));

  return (
    <>
      <button onClick={() => {ref.current.alterToggle()}}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  )
})

export default Button;