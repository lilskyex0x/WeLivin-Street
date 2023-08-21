import { NavBar } from "./components/Navbar";
import Home from "./components/pages/Home";
import New from "./components/pages/New";
import Research from "./components/pages/research";
import Sell from "./components/pages/Sell";
import Used from "./components/pages/used";
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/research" element={<Research />}/>
            <Route path="/sell" element={<Sell />}/>
            <Route path="/used" element={<Used />}/>
         </Routes>
      </div>
    </>
  );
};

export default App;
