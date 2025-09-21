import { useState } from "react";

export const LoginForm = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <div className="flex justify-center items-center bg-gray-300 h-screen">
        <div className="h-[300px] w-[450px] bg-white flex flex-col rounded-lg">
          <form className="pl-5" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-medium pt-4">Login Form</h1>
            <label htmlFor="username">
              <p className="pt-2 pb-1 font-light">Username</p>
            </label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleInput}
              required
              autoComplete="off"
              className="w-[407px] pt-2 pb-2 outline-0 bg-gray-200 rounded-lg"
            />

            <label htmlFor="password">
              <p className="pt-5 pb-1 font-light">Password</p>
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
              autoComplete="off"
              className="w-[407px] pt-2 pb-2 outline-0 bg-gray-200 rounded-lg"
            />
            <button
              className="w-[407px] p-2 text-white bg-blue-400 mt-4 rounded-lg"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
