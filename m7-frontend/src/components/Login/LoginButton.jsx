const LoginButton = ({content, onClick}) => {
    return (
      <div>
        <button onClick={onClick} className="flex w-[320px] h-[40px] justify-center items-center border-none bg-gray-950 text-sm text-white px-4 py-2 rounded-[10px] leading-5">
            {content}
        </button>
      </div>
    );
  };
  
  export default LoginButton;
  