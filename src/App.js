import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./data/video-details.json";
import "./data/videos.json";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/home-page/HomePage";
import VideoDetails from "./pages/video -details/VideoDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:id" element={<VideoDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;