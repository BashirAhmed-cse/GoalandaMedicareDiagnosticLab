import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import doctor1 from "../assets/img/d-1.jpeg";
import doctor2 from "../assets/img/d-3.jpeg";
import doctor3 from "../assets/img/d-2.jpg";
import doctor4 from "../assets/img/d-4.jpeg";
import doctor5 from "../assets/img/d-5.jpeg";
import doctor6 from "../assets/img/d-7.jpeg";
import doctor8 from "../assets/img/d-8.jpg";
import doctor9 from "../assets/img/d-9.jpg";
import doctor10 from "../assets/img/d-10.jpg";
import doctor11 from "../assets/img/d-11.jpg";
import doctor12 from "../assets/img/d-12.jpg";

const Doctors = () => {
  const data = [
    {
      img: doctor1,
      name: "Dr. Khairul Bashar",
      specialties: "Medicine Specialist",
    },
    {
      img: doctor2,
      name: "Dr. Md Akter Hossain",
      specialties: "Neurologist",
    },
    {
      img: doctor3,
      name: "Dr. Sharmina Haque",
      specialties: "Paediatrics",
    },
    {
      img: doctor4,
      name: "Dr. Masum Billah",
      specialties: "Oral & Dental Surgery",
    },
    {
      img: doctor5,
      name: "Dr. Emdadul Haque Tusar",
      specialties: "Ophthalmologist",
    },
    {
      img: doctor6,
      name: "Dr. Reshma Khanom",
      specialties: "General Surgery",
    },
    {
      img: doctor8,
      name: "Dr. Mahbubor Rahman",
      specialties: "Cardiology",
    },
    {
      img: doctor9,
      name: "Professor Dr. Salimur Rahman",
      specialties: "Medicine",
    },
    {
      img: doctor10,
      name: "Dr. Mariam Faruqui",
      specialties: "Gynecologist",
    },
    {
      img: doctor11,
      name: "Dr. Md. Saifullah",
      specialties: "Laparoscopic",
    },
    {
      img: doctor12,
      name: "DR. MOUDUDUL HAQUE",
      specialties: "Spine Specialist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className=" h-56 rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className=" pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
