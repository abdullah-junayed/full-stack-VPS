import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Welcome to client side.</h1>
      <h2>data: {message}</h2>
    </>
  );
}

export default App;
