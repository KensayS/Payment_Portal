import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login.js"
import Portal from "./components/portal"
import Payment from "./components/payment"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
