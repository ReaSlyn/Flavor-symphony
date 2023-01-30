import React from 'react'

export default function Timer(props) {
const [counter, setCounter] =useState(props.time);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return counter;
}
