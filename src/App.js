import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    </>
  );
}

export default App;
