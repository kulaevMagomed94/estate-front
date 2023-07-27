import { Routes, Route } from "react-router-dom";
import Estate from "./components/Estates/Estate";
import Auth from "./pages/Authorization/Auth";
import Login from "./pages/Authorization/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Estate />} />
      </Routes>
    </>
  );
}

export default App;
