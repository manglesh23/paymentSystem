import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./Pages/form";
import Payment from "./Pages/payment";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Payment/>}></Route>
      </Routes>
    </>
  );
}

export default App;
