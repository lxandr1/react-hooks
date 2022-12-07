import { useEffect, useLayoutEffect, useRef } from 'react';

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  // running when page opened
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    console.log(inputRef);
  }, []);

  // will running after all element already render
  useEffect(() => {
    console.log('useEffect');
    inputRef.current.value = 'Jamal';
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      Hello, this is layout effect
      <input
        ref={inputRef}
        value="Raymond"
        style={{ width: 400, height: 200 }}
      />
    </div>
  );
};

export default LayoutEffectTutorial;
