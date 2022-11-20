import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login.js"
import Portal from "./components/portal"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
    </Routes>
  );
}

export default App;
