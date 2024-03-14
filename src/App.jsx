import "./App.css";
import FizzBuzz from "./FizzBuzz";

function App() {
  const createNumbers = () => {
    let numbers = [];
    for (let number = 1; number <= 100; number++) {
      numbers.push(number);
    }
    return numbers;
  };

  return (
    <>
      <h1>FizzBuzz</h1>
      <FizzBuzz createNumbers={createNumbers} />
    </>
  );
}

export default App;
