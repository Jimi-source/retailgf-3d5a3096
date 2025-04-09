
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Receiving from "./pages/Receiving";
import Quantization from "./pages/Quantization";
import Shipping from "./pages/Shipping";
import Settings from "./pages/Settings";
import MainLayout from "./components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="receiving" element={<Receiving />} />
          <Route path="quantization" element={<Quantization />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
