import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus } from "@/api/auth.js";
import HalfTemplate from "@/components/LogIn/HalfTemplate.jsx";
import { API_BASE_URL } from "@/api/api.js";

const Login = () => {
  const nav = useNavigate();
  const handleKakaoLogin = () => {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/kakao`;
  };

  useEffect(() => {
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
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      console.log(
        "Token saved in localStorage:",
        localStorage.getItem("authToken")
      );

      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);

      nav("/");
    }
  }, [nav]);

  return (
    <div>
      <HalfTemplate type="login" />
    </div>
  );
};

export default Login;
