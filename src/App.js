import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login.js"
import Portal from "./components/portal"
import Payment from "./components/payment"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal num={600}/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/portal/i" element={<Portal num={350}/>} />
    </Routes>
  );
}

export default App;
