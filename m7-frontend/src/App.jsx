import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { authState, getAuthStatus } from "./api/auth.js";

import Home from "./pages/Home.jsx";
import Tip from "./pages/Tip.jsx";
import Bag from "./pages/Bag.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import { getBagsAPI } from "./api/api.js";
import { bagsState } from "./api/atom.js";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const BagIdRefContext = createContext();

function App() {
  useEffect(() => {
    if (window.location.pathname.endsWith("/")) {
      const newPath = window.location.pathname.slice(0, -1);
      window.history.replaceState(null, "", newPath);
    }
  }, []);

  const [auth, setAuth] = useRecoilState(authState);
  const memberId = auth.kakaoId;

  const [bags, setBags] = useRecoilState(bagsState);

  // 가방 데이터 가져옴
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await getBagsAPI(memberId);
        if (Array.isArray(response)) {
          setBags(response);
        } else {
          console.error("Invalid bags response format:", response);
        }
      } catch (error) {
        console.error("Error fetching bags:", error);
      }
    };

    fetchBags();
  }, [memberId, setBags]);

  const bagIdRef = useRef(
    bags.length > 0 ? Math.max(...bags.map((bag) => bag.id)) + 1 : 1
  );

  const handleLogin = () => {
    setAuth({
      ...auth,
      isAuthenticated: true,
    });
  };

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const status = await getAuthStatus();

        setAuth({
          isAuthenticated: status.isAuthenticated,
          kakaoId: status.kakaoId,
          email: status.email,
          nickname: status.nickname,
        });
      } catch (error) {
        console.error("인증 상태 확인 실패:", error);

        setAuth({
          isAuthenticated: false,
          kakaoId: null,
          email: null,
          nickname: null,
        });
      }
    };

    fetchAuthStatus();
  }, []);

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
                <PrivateRoute isAuthenticated={auth.isAuthenticated}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/tip"
              element={
                <PrivateRoute isAuthenticated={auth.isAuthenticated}>
                  <Tip />
                </PrivateRoute>
              }
            />
            <Route
              path="/bag/:id"
              element={
                <PrivateRoute isAuthenticated={auth.isAuthenticated}>
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
