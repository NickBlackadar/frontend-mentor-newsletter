import { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Success from "./components/Success";

function App() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (!isSubmitted)
    return <SignUp setSubmitted={setSubmitted} setEmail={setEmail} />;

  return <Success setSubmitted={setSubmitted} email={email} />;
}

export default App;
