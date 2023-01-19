import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header, Home, NewCars } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newcars" element={<NewCars />} />
        <Route path="/usedcars" element={<NewCars />} />
      </Routes>
    </div>
  );
}

export default App;
