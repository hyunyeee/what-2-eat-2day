import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteChangeTracker from "./components/RouteChangeTracker.tsx";
import Main from "./pages/Main.tsx";
import Menus from "./pages/Menus.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <RouteChangeTracker />
        <Route path="/" element={<Main />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
