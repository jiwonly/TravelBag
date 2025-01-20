import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus, fetchAccessTokenAPI } from "@/api/auth.js";
import HalfTemplate from "@/components/LogIn/HalfTemplate.jsx";
import { API_BASE_URL } from "@/api/api.js";

const Login = () => {
  const nav = useNavigate();
  // 카카오 로그인 함수
  const handleKakaoLogin = () => {
    // 백엔드의 카카오 인증 엔드포인트로 이동
    window.location.href = `${API_BASE_URL}/oauth2/authorization/kakao`;
  };
  useEffect(() => {
    // 새로고침 시 인증 상태 확인 및 복구
    const checkAuthStatus = async () => {
      try {
        const status = await getAuthStatus();
        if (status.isAuthenticated) {
          nav("/");
        }
      } catch (error) {
        console.error("인증 상태 확인 실패:", error);
      }
    };
    checkAuthStatus();
  }, [nav]);

  useEffect(() => {
    // 카카오 로그인 후 리다이렉트 처리
    const fetchToken = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.warn(
          "No valid authToken found in localStorage. Cannot logout."
        );
        alert("로그아웃 실패: 인증 정보가 없습니다.");
        return;
      }
      nav("/");
    };
    fetchToken();
  }, [nav]);

  return (
    <div>
      <HalfTemplate type="login" />
    </div>
  );
};

export default Login;
