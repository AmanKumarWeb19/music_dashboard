// Sidebar.jsx
import React from "react";
import Logo from "../assets/Logo.jpg";
import HomeLogo from "../assets/vec1.jpg";
import Courses from "../assets/vec2.jpg";

const Sidebar = () => {
  const commonBoxStyle = "p-3 rounded w-20 m-auto";

  return (
    <div className="bg-sidebar-background w-1/5 h-screen p-10 border-4 border-black-600">
      <div className="w-20 m-auto mb-4 rounded-lg ">
        {/* First Div */}
        <div className={`bg-sidebar-div ${commonBoxStyle}`}>
          <img src={Logo} alt="Logo" className="w-16 h-15" />
          {/* Content for the first div */}
        </div>
      </div>

      <div className="w-20 m-auto mb-4 mt-20 border-2 border-black-200 bg-home-background rounded-lg ">
        {/* Second Div */}
        <div className={`bg-sidebar-div ${commonBoxStyle}`}>
          <img src={HomeLogo} alt="Logo" className="w-20 h-10" />
          <p>Home</p>
          {/* Content for the second div */}
        </div>
      </div>

      <div className="w-20 m-auto mb-4  border-2 border-black-200 bg-course-background rounded-lg ">
        {/* Third Div */}
        <div className={`bg-sidebar-div ${commonBoxStyle}`}>
          <img src={Courses} alt="Logo" className="w-20 h-10 m-auto" />
          <p>Courses</p>
          {/* Content for the third div */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
