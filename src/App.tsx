import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.tsx";
import Menus from "./pages/Menus.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
