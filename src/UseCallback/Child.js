import { useEffect } from "react";

export default function Child({returnComment}) {
  useEffect(() => {
    console.log('Function Was Called');
  }, [returnComment])

  return <>{returnComment()}</>
}