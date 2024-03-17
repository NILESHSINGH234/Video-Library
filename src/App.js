import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/Home/Home";
import { Trending } from "./pages";
import { Login } from "./pages";
import { Signup } from "./pages";
import { useAuth } from "./context/AuthContext";
import { Trending } from "./pages";

function App() {
  const {
    state: { isLoggedIn },
  } = useAuth();
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
     <Route  path="/trending" element={<Trending></Trending>}></Route>
    </Routes>
    </>
  );
}

export default App;
