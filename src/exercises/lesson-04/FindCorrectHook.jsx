// TOPIC: Choose the correct tool: useRef vs useState

import { useState } from "react";

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  let [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((c) => c + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// The problem was that clickCount was a regular variable,
// so React did not update the UI when it changed.
// I used useState instead of useRef because the count needs
// to be displayed and updated whenever the button is clicked.
// I used setClickCount to update the state and re-render the component.