import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="w-full h-full p-20">
      <div className="w-4/5 m-auto">
        <div>
          <h1 className="text-8xl font-bold">Administrator</h1>
          {/* Increase text size and make it bold */}
        </div>
        <p className="text-xl font-serif py-10 font-bold">
          {/* Change font style to serif */}
          As the Administrator of a music school, I will need to be able to
          create courses, view enrollments and review analytics for the entire
          school. I should also be able to see a cumulative view of all students
          in the school regardless of the course. Only I should be able to
          access this data through a username and password.
        </p>
        <div className="border-4 border-black-600 bg-blue-500 text-white font-bold py-2 px-4 rounded w-32 group hover:bg-blue-600">
          <button>Login Here</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
