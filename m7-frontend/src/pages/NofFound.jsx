const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
      <p className="text-xl text-[#414149] mt-4">잘못된 페이지입니다.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-[#24A3B6] text-white rounded-md shadow-lg hover:bg-[#218499] transition-all duration-300"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};
export default NotFound;
