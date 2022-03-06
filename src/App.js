import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DummyPage from "./pages/DummyPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<DummyPage />} />
          <Route path="/news" element={<DummyPage />} />
          <Route path="/images" element={<DummyPage />} />
          <Route path="/shopping" element={<DummyPage />} />
          <Route path="/maps" element={<DummyPage />} />
          <Route path="/more" element={<DummyPage />} />
          <Route path="/settings" element={<DummyPage />} />
          <Route path="/tools" element={<DummyPage />} />
          <Route path="/gmail" element={<DummyPage />} />
          <Route path="/store" element={<DummyPage />} />
          <Route path="/about" element={<DummyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
