import { useEffect, useMemo, useState } from 'react';

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('useEffect already running...');
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json();
    console.log('Fetching data', data);
    setData(data);
  };

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName
      }
    }

    console.log('This function was computed')

    return longestName;
  }

  const getLongestName =  useMemo(() => findLongestName(data), [data])

  return (
    <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <br />
        
        {toggle ? 'Toggle True' : 'Toggle False'}
        <div>
        Longest name = {getLongestName}
        </div>
    </div>
  );
}
