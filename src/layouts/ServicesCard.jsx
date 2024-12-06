import React from "react";

const ServicesCard = ({ icon, title, description, items }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <section>
        <p>{description}</p>
        {items && (
          <ul className="list-disc list-inside mt-2 text-sm text-left">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default ServicesCard;
