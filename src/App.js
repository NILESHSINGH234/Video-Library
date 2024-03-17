import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/Home/Home";
import { Trending } from "./pages";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/trending" element={<Trending></Trending>}></Route>
    </Routes>
    </>
  );
}

export default App;
