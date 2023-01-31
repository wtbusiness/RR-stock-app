
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import Stock from "./pages/Stock";
import Nav from "./components/Nav";
import stocks from "./stock-data";
import { useState } from "react";

function App() {
  const [stock, setStock] = useState(stocks);
  console.log(stock);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard stock={stock} />} />
        <Route path="/stocks/symbol" element={<Stock stock={stock} />} />
        
        {/* <Route path="/price/:symbol" element={<Stock />} /> */}
      </Routes>
    </div>
  );
}

export default App;
