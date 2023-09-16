import React from 'react';
import Link from 'next/link'; // Import the Link component

const Home = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Link href="/learn-more">
        <button
          style={{ width: "230px", height: "230px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg mr-9"
        >
          Learn More
        </button>
      </Link>
      <Link href="/continue-recruiting">
        <button
          style={{ width: "230px", height: "230px" }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
        >
          Continue Recruiting
        </button>
      </Link>
    </div>
  );
};

export default Home;
