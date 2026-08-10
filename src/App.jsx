import { Routes, Route } from "react-router-dom";
import MarketingSite from "./pages/MarketingSite";
import CrmHome from "./pages/CrmHome";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingSite />} />
      <Route path="/crm" element={<CrmHome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
