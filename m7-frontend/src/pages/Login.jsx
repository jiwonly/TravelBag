import HalfTemplate from "@/components/HalfTemplate";
import { useEffect } from "react";

const Login = ({ onLogin }) => {
  return (
    <div>
      <HalfTemplate type="login" onLogin={onLogin} />
    </div>
  );
};

export default Login;
