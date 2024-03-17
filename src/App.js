import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Home, Trending, Login, Signup } from "./pages";
import { LikedVideos } from "./pages";
//import { ToasterWrapper } from "./utils";
import { useAuth } from "./context/AuthContext";
import { VideoDetail } from "./pages";
import { ToasterWrapper } from "./utils";
import { History } from "./pages";
import { Playlist } from "./pages/Playlist/Playlist";
import { PlaylistDetail } from "./pages/PlayListDetail/PlayListDetail";
function App() {
  const {
    state: { isLoggedIn },
  } = useAuth();
  return (
    <div className="App">
    <ToasterWrapper></ToasterWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/watch/:videoId" element={<VideoDetail />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId"  element={<PlaylistDetail></PlaylistDetail>} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}
export default App;