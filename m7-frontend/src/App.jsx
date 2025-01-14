import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bagState } from "./api/Bag/atom";
import { bagReducerSelector } from "./api/Bag/selector";
// import { getAuthStatus } from "./api/auth";

import Home from "./pages/Home";
import Tip from "./pages/Tip";
import Bag from "./pages/Bag";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NofFound";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const BagIdRefContext = createContext();

function App() {
  const bags = useRecoilValue(bagState);
  const bagsDispatch = useSetRecoilState(bagReducerSelector);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const bagIdRef = useRef(
    bags.length > 0 ? Math.max(...bags.map((bag) => bag.id)) + 1 : 1
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <BagIdRefContext.Provider value={bagIdRef}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/tip"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Tip />
                </PrivateRoute>
              }
            />
            <Route
              path="/bag/:id"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Bag />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </BagIdRefContext.Provider>
    </>
  );
}

export default App;
