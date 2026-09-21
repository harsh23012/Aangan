import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Host from "./Host";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/host" element={<Host />} />
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  );
}