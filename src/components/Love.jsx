import { useState } from "react";
import { GiLovers } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const Love = () => {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [lovePercentage, setLovePercentage] = useState(null);

  const calculateLovePercentage = (e) => {
    e.preventDefault();
    if (!yourName && !partnerName) {
      alert("Please enter your name and your partner name");
    } else {
      const percentage = Math.floor(Math.random() * 101);
      setLovePercentage(percentage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="w-full max-w-xl p-8 rounded-md shadow-lg">
        <h1 className="text-4xl text-center font-extrabold mb-10">
          Love Calculator
        </h1>
        <form className="text-center" onSubmit={calculateLovePercentage}>
          <div className="mb-6">
            <label
              htmlFor="yourName"
              className="block text-gray-800 text-lg mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="yourName"
              placeholder="Enter your name"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>
          <FaHeart className="inline text-red-600 text-6xl" />
          <div className="mb-6">
            <label
              htmlFor="partnerName"
              className="block text-gray-800 text-lg mb-2"
            >
              Partner Name:
            </label>
            <input
              type="text"
              id="partnerName"
              placeholder="Enter your partner's name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
              
            >
              Calculate Love
            </button>
          </div>
        </form>
        {lovePercentage !== null && (
          <div className="mt-8 flex justify-center items-center gap-4 text-red-600">
            <GiLovers className="text-4xl" />
            <div className="text-4xl font-bold">
              {yourName} <FaHeart className="inline text-red-600" />{" "}
              {partnerName}: {lovePercentage}%
            </div>
            <GiLovers className="text-4xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Love;
