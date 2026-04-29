import HomePage from "./pages/home/index";
import SimpleWeapons from "./pages/simple-weapons";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simple-weapons" element={<SimpleWeapons />} />
      </Routes>
    </>
  );
}

export default App;
