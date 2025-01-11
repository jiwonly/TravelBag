import HalfTemplate from "@/components/HalfTemplate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus } from "@/api/auth";

const Login = () => {
  const nav = useNavigate();
  // 카카오 로그인 함수
  const handleKakaoLogin = () => {
    // 백엔드의 카카오 인증 엔드포인트로 이동
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };
  useEffect(() => {
    const checkAuthStatus = async () => {
      const status = await getAuthStatus();
      if (status.isAuthenticated) {
        nav("/");
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <div>
      <HalfTemplate type="login" onLogin={handleKakaoLogin} />
    </div>
  );
};

export default Login;
