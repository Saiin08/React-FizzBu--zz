import { useEffect, useState } from "react";

export default function FizzBuzz({ createNumbers }) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(createNumbers);
  }, []);

  // if (!array.length) {
  //   return null;
  // }

  return (
    <div className="fizzbuzz">
      <ul>
        {array.map((number) => {
          if (number % 3 === 0 && number % 5 === 0) {
            return (
              <>
                <li>FizzBuzz</li>
                <hr />
              </>
            );
          } else if (number % 3 === 0) {
            return (
              <>
                <li>Fizz</li>
                <hr />
              </>
            );
          } else if (number % 5 === 0) {
            return (
              <>
                <li>Buzz</li>
                <hr />
              </>
            );
          } else {
            return (
              <>
                <li>{number}</li>
                <hr />
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}
