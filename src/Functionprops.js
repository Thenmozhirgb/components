import React from 'react';
 
function Functionprops() {
  const data = 'Hello Function Component!';
 
  return <Child value={data} />;
}
 
function Child(props) {
  return <h1>{props.value}</h1>;
}
 
export default Functionprops;