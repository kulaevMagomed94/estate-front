
import { Routes, Route } from "react-router-dom";
import Estate from "./components/Estates/Estate";
import Auth from "./pages/Authorization/Auth";
import Login from "./pages/Authorization/Login";
import Header from "./components/Header/Header";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Comparison from "./components/Comparison/Comparison";
import Comments from "./pages/Comments/Comments";

function App() {
  return (


    <>
      <div className="container">
        <Header />
        
      </div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Estate />} />
        <Route path="/cards" element={<Cards/>} />
        <Route path="/comments" element={<Comments/>}/>
        <Route path="/comparison" element={<Comparison/>}/>
      </Routes>
    </>
  );

}

export default App;
