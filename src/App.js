import { useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [read, setRead] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setRead(read + 1);
  }

  return (
    <div>
      <h1>Free Advice</h1>
      <button onClick={getAdvice}>Get Advice </button>
      <p>{advice}</p>
      <p>
        {" "}
        You have read <strong>{read}</strong> pieces of advice{" "}
      </p>
    </div>
  );
}
