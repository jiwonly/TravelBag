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
    const authenticate = async () => {
      try {
        const status = await getAuthStatus(); // 인증 상태 확인
        console.log("Authentication status:", status);
        if (status.isAuthenticated) {
          const token = await fetchAccessTokenAPI(); // 토큰 가져오기
          if (token) {
            localStorage.setItem("authToken", token);
            console.log("Token saved:", token);
            nav("/");
          }
        }
      } catch (error) {
        console.error("Error during authentication flow:", error);
      }
    };
    authenticate();
  }, [nav]);

  return (
    <div>
      <HalfTemplate type="login" />
    </div>
  );
};

export default Login;
