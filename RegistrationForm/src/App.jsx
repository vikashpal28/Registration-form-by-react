import { useState } from "react";

export const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // to get data at console

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, phoneNumber });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gray-300 h-screen">
        <p className="text-center pt-3 font-medium">
          hello, my name is{" "}
          <span className="text-blue-500">
            {firstName} {lastName}
          </span>
          . My email is <span className="text-blue-500">{email}</span> and my
          phone number is <span className="text-blue-500">{phoneNumber}</span>
        </p>
        <form className="w-[500px] h-[725px] bg-white mt-20 pl-4 rounded-lg">
          <h1 className="text-3xl font-semibold pt-4 pb-2">Sign Up</h1>
          <p className="text-gray-400 pb-2">
            Please fill in this form to create an account
          </p>
          <h2 className="text-2xl font-semibold pb-2">First Name</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 w-[467px] bg-gray-300 outline-0 rounded-lg"
          />
          <h2 className="text-2xl font-semibold pb-2 pt-2">Last Name</h2>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-3 w-[467px] bg-gray-300 outline-0 rounded-lg"
          />

          <h2 className="text-2xl font-semibold pb-2 pt-2">Email</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-[467px] bg-gray-300 outline-0 rounded-lg"
          />

          <h2 className="text-2xl font-semibold pb-2 pt-2">Password</h2>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-[467px] bg-gray-300 outline-0 rounded-lg"
          />

          <h2 className="text-2xl font-semibold pb-2 pt-2">Phone Number</h2>
          <input
            type="text"
            placeholder="9876543210"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-3 w-[467px] bg-gray-300 outline-0 rounded-lg"
          />
          <p className="pt-8 text-gray-400">
            By creating an account you agree to our
            <span className="text-blue-400">Terms & Privacy</span>
          </p>
          <button
            className="w-[467px] bg-blue-500 h-[50px] p-2 text-2xl mt-5 rounded-lg"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
