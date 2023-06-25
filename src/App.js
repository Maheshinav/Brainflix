import './App.css';
import Main from "./components/main/Main";
import videoData from "./data/video-details.json";
import './data/video-details.json';
import './data/videos.json';
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Main videoData={videoData}/>
    </div>

  );
}

export default App;

