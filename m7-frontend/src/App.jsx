import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useRef, useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  authState,
  fetchAccessTokenAPI,
  getAuthStatus,
  postLogoutAPI,
} from "./api/auth.js";

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
  // 로그인 시 주석을 풀고 실행
  // 인증상태 확인까지는 잘 되니까 확인후에 바로 토큰 가져오기
  useEffect(() => {
    const authenticateAndFetchToken = async () => {
      try {
        // 인증 상태 확인
        const status = await getAuthStatus();
        console.log("인증 상태 확인:", status);

        // 인증 상태 업데이트
        setAuth({
          isAuthenticated: status.isAuthenticated,
          kakaoId: status.kakaoId,
          email: status.email,
          nickname: status.nickname,
        });

        // 인증 상태가 true일 때만 토큰 가져오기
        if (status.isAuthenticated) {
          const token = await fetchAccessTokenAPI();
          if (token) {
            // 토큰 저장
            localStorage.setItem("authToken", token);
            console.log("토큰 가져오기 성공:", token);
          } else {
            console.error("토큰 가져오기 실패");
          }
        } else {
          console.warn("사용자가 인증되지 않았습니다.");
        }
      } catch (error) {
        console.error("인증 상태 확인 또는 토큰 가져오기 실패:", error);

        // 인증 실패 시 기본값 설정
        setAuth({
          isAuthenticated: false,
          kakaoId: null,
          email: null,
          nickname: null,
        });
      }
    };

    authenticateAndFetchToken(); // 인증 상태 확인 및 토큰 가져오기 실행
  }, []); // 컴포넌트 마운트 시 실행

  // // 이미 SideBar.jsx에 있어서 필요 없을 것 같은데 일단 냅둠
  // const handleLogout = async () => {
  //   try {
  //     await postLogoutAPI(); // 로그아웃 API 호출
  //     setAuth({
  //       isAuthenticated: false,
  //       kakaoId: null,
  //       email: null,
  //       nickname: null,
  //     });
  //     alert("로그아웃 성공!");
  //     nav("/login");
  //   } catch (error) {
  //     alert("로그아웃 실패!");
  //     console.error("Logout error:", error);
  //   }
  // };

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
