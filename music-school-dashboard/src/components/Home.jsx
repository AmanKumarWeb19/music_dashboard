import React from "react";

const Home = () => {
  return (
    <div className="w-full border border-red-500 ">
      <div className="w-4/5 border border-blue-500 m-auto ">
        <div>
          <h1 className="text-3xl">Administrator</h1>
        </div>
        <p className="text-3xl">
          As the Administrator of a music school, I will need to be able to
          create courses, view enrollments and review analytics for the entire
          school. I should also be able to see a cumulative view of all stuents
          in the school regardless of the course. Only I should be able to
          access this data through a username and password.
        </p>
      </div>
    </div>
  );
};

export default Home;
