import React from "react";
import img from "../assets/img/mainimage.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Established with a vision to provide high-quality and accurate diagnostic services, we are proud to serve the Goalanda community and beyond.
        </p>
        <p className="text-justify lg:text-start">
        At Goalanda Medicare Diagnostic Lab, we understand the importance of timely and precise diagnostics in ensuring effective healthcare outcomes. That’s why we have invested in state-of-the-art equipment, cutting-edge technology, and a team of highly skilled professionals dedicated to delivering excellence in every test and service.
        </p>
        <p className="text-justify lg:text-start">
       <p className="my-2 text-2xl font-bold">Our Mission</p>
To empower individuals and healthcare providers with accurate diagnostic insights, enabling better health decisions and improved well-being.
<p className="my-2 text-2xl font-bold">Our Vision</p>

To become the leading diagnostic center in the region, renowned for reliability, innovation, and compassionate care.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
