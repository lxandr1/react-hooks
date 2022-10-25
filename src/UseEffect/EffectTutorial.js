import axios from 'axios';
import { useEffect, useState } from 'react';

const EffectTutorial = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  // use when fetch any api
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('API WAS CALLED');
      });
  }, [count]);

  return (
    <div>
      Here it is useEffect
      <h1>{data}</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default EffectTutorial;
