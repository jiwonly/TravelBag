import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus } from "@/api/auth";
import HalfTemplate from "@/components/LogIn/HalfTemplate";

const Login = () => {
  const nav = useNavigate();
  // 카카오 로그인 함수
  const handleKakaoLogin = () => {
    // 백엔드의 카카오 인증 엔드포인트로 이동
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
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
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token); // 토큰 저장
      nav("/"); // 홈 화면으로 이동
    }
  }, [nav]);

  return (
    <div>
      <HalfTemplate type="login" onLogin={handleKakaoLogin} />
    </div>
  );
};

export default Login;
