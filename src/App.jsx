import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Predictions from "./pages/Predictions";
import Chat from "./pages/Chat";
import "./input.css";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({ duration: 700 });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="statistiques" element={<Stats />} />
          <Route path="predictions" element={<Predictions />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
