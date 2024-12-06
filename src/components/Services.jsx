import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <RiMicroscopeLine size={35} className="text-backgroundColor" />,
      title: "Pathology Tests",
      description: "Comprehensive lab tests including blood, urine, and microbiology analysis.",
    },
    {
      icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />,
      title: "Imaging Services",
      description: "Accurate imaging with X-ray, ultrasound, and more.",
    },
    {
      icon: <FaHeartbeat size={35} className="text-backgroundColor" />,
      title: "ECG & Cardiology Diagnostics",
      description: "Specialized heart health diagnostics including ECG monitoring.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Goalanda Medicare Diagnostic Lab is your trusted partner for accurate and dependable results.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
