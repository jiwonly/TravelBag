import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useRef, useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { authState } from "./api/auth";
import { getAuthStatus } from "./api/auth";

import Home from "./pages/Home";
import Tip from "./pages/Tip";
import Bag from "./pages/Bag";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { getBagsAPI } from "./api/api";
import { bagsState } from "./api/atom";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const BagIdRefContext = createContext();

function App() {
  // URL 끝의 / 제거하는 useEffect 추가
  useEffect(() => {
    if (window.location.pathname.endsWith("/")) {
      const newPath = window.location.pathname.slice(0, -1); // 끝의 / 제거
      window.history.replaceState(null, "", newPath); // URL 변경
    }
  }, []);

  const [auth, setAuth] = useRecoilState(authState);
  const memberId = auth.kakaoId;

  const [bags, setBags] = useRecoilState(bagsState);
  console.log(auth);

  // 가방 데이터 가져옴
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await getBagsAPI(memberId); // API 호출
        if (Array.isArray(response)) {
          setBags(response); // bags 상태 업데이트
        } else {
          console.error("Invalid bags response format:", response);
        }
      } catch (error) {
        console.error("Error fetching bags:", error);
      }
    };

    fetchBags();
  }, [memberId, setBags]); // memberId가 변경될 때만 실행

  const bagIdRef = useRef(
    bags.length > 0 ? Math.max(...bags.map((bag) => bag.id)) + 1 : 1
  );

  const handleLogin = () => {
    setAuth({
      ...auth,
      isAuthenticated: true,
    });
  };

  // 로그인 쓸 때 주석 풀기
  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const status = await getAuthStatus();
        // console.log("인증 상태 확인:", status);
        // console.log("인증 상태 확인2:", status.isAuthenticated);

        //인증 상태 업데이트
        setAuth({
          isAuthenticated: status.isAuthenticated,
          kakaoId: status.kakaoId,
          email: status.email,
          nickname: status.nickname,
        });
      } catch (error) {
        console.error("인증 상태 확인 실패:", error);

        // 인증 실패 시 기본값 설정
        setAuth({
          isAuthenticated: false,
          kakaoId: null,
          email: null,
          nickname: null,
        });
      }
    };

    fetchAuthStatus(); // 백엔드에서 인증 상태 가져오기
  }, [setAuth]);

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
