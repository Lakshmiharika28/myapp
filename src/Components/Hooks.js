import React, { useState,useEffect } from 'react'


export default function Hooks() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count)=>count+1);
    }, 3000);
  });

  return (
  <>
  <div className='col-md-9'>
  <h1>I have rendered {count} times!</h1>
  </div>
  </>
  );
}