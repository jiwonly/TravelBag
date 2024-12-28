import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Tip from "./pages/Tip";
import Template from "./pages/Template";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/tip" element={<Tip />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </Router>
  );
}

export default App;
