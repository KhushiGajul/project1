import React, { useRef, useState } from 'react'

const Demo = () => {

    const [count1,setCount1] = useState(0);
    const count2 = useRef(0);

    const handleStateCllick =() => {
        setCount1(count1 + 1);
    };

    const handleRefClick = () => {
        count2.current = count2.current + 1;
        console.log(count2.current);
    };
  return (
    <>
        <button type='button' onClick={handleStateCllick}>useState increment</button>
        <span>State count: {count1}</span>
        <button type='button' onClick={handleRefClick}>useRef increment</button>
        <span>Ref count {count2.current}</span>
    </>
  )
};
export default Demo;
