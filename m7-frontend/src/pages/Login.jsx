import HalfTemplate from "@/components/HalfTemplate";

const Login = ({ onLogin }) => {
  return (
    <div>
      <HalfTemplate type="login" onLogin={onLogin} />
    </div>
  );
};

export default Login;
