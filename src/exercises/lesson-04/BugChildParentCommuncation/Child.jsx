export default function Child({ increment }) {
  return <button onClick={increment}>Increment Counter</button>;
}

// Explanation:
// I received the increment function as a prop from Parent
// and connected it to the button's onClick event.
// When the button is clicked, it calls the function
// to update the counter in Parent.