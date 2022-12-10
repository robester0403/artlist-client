import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AroundMePage from "./pages/AroundMePage/AroundMePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aroundme" element={<AroundMePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
