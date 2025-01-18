import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useRef, useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { authState } from "./api/auth";
import { bagState } from "./api/Bag/atom";
import { getAuthStatus } from "./api/auth";

import Home from "./pages/Home";
import Tip from "./pages/Tip";
import Bag from "./pages/Bag";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const BagIdRefContext = createContext();

function App() {
  const bags = useRecoilValue(bagState);

  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState);
  const bagIdRef = useRef(
    bags.length > 0 ? Math.max(...bags.map((bag) => bag.id)) + 1 : 1
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // 로그인 쓸 때 주석 풀기

  // useEffect(() => {
  //   const fetchAuthStatus = async () => {
  //     const status = await getAuthStatus();
  //     console.log(status);
  //     setIsAuthenticated(status.isAuthenticated);
  //   };
  //   fetchAuthStatus();
  // }, []);

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
