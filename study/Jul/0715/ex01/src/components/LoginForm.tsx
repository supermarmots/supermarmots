function LoginForm() {
  return (
    <div className="max-w-sm p-6 mx-auto mt-10 bg-white border rounded shadow">
      <h2 className="mb-4 text-lg font-bold text-center">로그인</h2>
      <div className="mb-4">
        <input
          className="w-full p-2 border rounded focus:outline-none"
          type="email"
          placeholder="이메일"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full p-2 border rounded focus:outline-none"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <button className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        로그인
      </button>
    </div>
  );
}

export default LoginForm;
