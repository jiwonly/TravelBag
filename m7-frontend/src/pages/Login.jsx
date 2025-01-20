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
    // 리다이렉트 URL에서 인증 코드를 처리하고 액세스 토큰 저장
    const fetchToken = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const authCode = searchParams.get("code"); // 백엔드에서 전달한 인증 코드

      if (authCode) {
        try {
          console.log("Auth code received:", authCode);
          const token = await fetchAccessTokenAPI(authCode); // 백엔드에서 액세스 토큰 요청
          if (token) {
            localStorage.setItem("authToken", token); // 토큰 저장
            console.log("Token stored in localStorage:", token);
            nav("/"); // 로그인 후 홈으로 리다이렉트
          }
        } catch (error) {
          console.error("Failed to fetch token:", error);
        }
      }
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
