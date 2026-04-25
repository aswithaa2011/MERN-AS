// useEffect is a React Hook used to run side effects in a component.

// 👉 Side effects mean things like:

// Calling an API
// Updating the DOM
// Setting timers
// Logging data

// 👉 In simple words:
// It runs some code after the component renders.

// 🔹 Dependency Array

// The dependency array controls when the useEffect runs.

// It is the second argument:

// useEffect(() => {}, [dependencies])

// 👉 React watches these values.
// 👉 If any value changes, the effect runs again.

// 🔹 Without Dependency Array
// useEffect(() => {
//   // code
// });

// 👉 No array means:

// Runs every time the component renders
// Can cause performance issues if not handled properly
// 🔹 Empty Dependency Array []
// useEffect(() => {
//   // code
// }, []);

// 👉 Runs only once
// 👉 Like component load (mount)

// 🔹 With Dependency [value]
// useEffect(() => {
//   // code
// }, [value]);

// 👉 Runs:

// First time (on load)
// Again whenever value changes
// 🔹 fetch

// fetch is a built-in JavaScript function used to get data from an API (server).

// 👉 Example use:

// Getting user data
// Loading posts
// Calling backend APIs

// 👉 Basic idea:

// Send request to server
// Receive response
// Convert to JSON
// Use the data
// 🧠 One-line summary
// useEffect → run side effects
// Dependency array → control when it runs
// No dependency → runs every render
// [] → runs once
// [value] → runs when value changes
// fetch → get data from API