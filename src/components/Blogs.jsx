import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/covid.jpg";
import img2 from "../assets/img/pressuretest.jpg";
import img3 from "../assets/img/health.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import img7 from "../assets/img/blog-7.png";
import img8 from "../assets/img/blog-8.png";
import img9 from "../assets/img/covid1111.jpg";
import img10 from "../assets/img/covid2222.jpg";
import img11 from "../assets/img/Screenshot_3.jpg";
import img12 from "../assets/img/Screenshot_2.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
          Gallery
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Stay ahead of potential health issues with preventive diagnostic services and regular monitoring tailored to your lifestyle.
          </p>
        </div>
        
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="COVID-19" />
          <BlogCard img={img2} headlines="Blood Present Check" />
          <BlogCard
            img={img3}
            headlines="Basic Check-up "
          />
          <BlogCard img={img4} headlines="" />
          <BlogCard img={img5} headlines="" />
          <BlogCard img={img6} headlines="" />
          <BlogCard img={img7} headlines="" />
          <BlogCard img={img8} headlines="" />
          <BlogCard img={img9} headlines="" />
          <BlogCard img={img10} headlines="" />
          <BlogCard img={img11} headlines="" />
          <BlogCard img={img12} headlines="" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
