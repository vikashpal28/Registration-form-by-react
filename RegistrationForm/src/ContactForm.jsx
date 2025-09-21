import { useState } from "react";

export const ContactForm = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    message: "",
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
      <div className=" flex justify-center items-center bg-gray-300 h-screen">
        <div className="bg-white h-[550px] w-[450px] flex flex-col rounded-lg">
          <form className="pl-5" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-medium pt-5">Contact Form</h1>
            <label htmlFor="userName">
              <p className="pt-3 pb-1">Username</p>
            </label>
            <input
              type="text"
              value={user.userName}
              name="userName"
              onChange={handleInput}
              required
              aria-autocomplete="off"
              className="w-[410px] pt-2 pb-2 bg-gray-200 outline-0 rounded-lg"
            />
            <label htmlFor="email">
              <p className="pt-3 pb-1">email</p>
            </label>
            <input
              type="text"
              value={user.email}
              name="email"
              onChange={handleInput}
              required
              aria-autocomplete="off"
              className="w-[410px] pt-2 pb-2 bg-gray-200 outline-0 rounded-lg"
            />

            <label htmlFor="message">
              <p className="pt-3 pb-1">Message</p>
            </label>
            <textarea
              type="text"
              name="message"
              onChange={handleInput}
              value={user.message}
              required
              aria-autocomplete="off"
              className="w-[410px] h-[200px] pt-2 pb-2 pl-1 pr-1 bg-gray-200 outline-0 rounded-lg"
            />
            <button className="w-[410px] bg-blue-400 mt-4 p-4 rounded-lg text-white" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
