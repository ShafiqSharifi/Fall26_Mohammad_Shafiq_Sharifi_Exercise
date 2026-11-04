import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child increment={increment} />
    </div>
  );
}

// Explanation:
// The Child button was not connected to the Parent's increment function.
// I fixed it by passing increment to Child as a prop.
// The Child calls this function when the button is clicked,
// allowing Parent to update its count state.
