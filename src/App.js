import './App.css';
import Main from "./components/main/main";
import videoData from "./data/video-details.json";
import './data/video-details.json';
import './data/videos.json';
import Nav from "./components/nav/nav";

function App() {
  return (
    <div>
      <Nav />
      <Main videoData={videoData}/>
    </div>

  );
}

export default App;

