import React from "react";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-gray-200 bg-[url('assets/img/mainimage.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Welcome to Goalanda Medicare Diagnostic Lab
        </h1>
        <p className="text-white">
        At Goalanda Medicare Diagnostic Lab, we are committed to providing accurate, reliable, and timely diagnostic services to support your health and well-being. Located in the heart of Goalanda, our state-of-the-art facility is equipped with advanced technology and staffed by experienced professionals dedicated to ensuring the highest standards of care.
        </p>

        <div className="mt-10">
        <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer bg-orange-500 p-2 rounded-md"
            >
              Services
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
