import { useState } from "react";
import HeaderTitle from "./../reuseables/HeaderTitle";
import plus from "./../assets/icon/plus.png";
import minus from "./../assets/icon/minus.png";

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0); // Initialize with 0 to open the first box

  const data = [
    "Consultation",
    "Research and Strategy Development",
    "Implementation",
    "Monitoring and Optimization",
    "Reporting and Communication",
    "Continual Improvement",
  ];
  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="mt-16 width padding-x padding-y">
      <HeaderTitle
        title={"Our Working Process"}
        content={"Step-by-Step Guide to Achieving Your Business Goals"}
      />

      <section className="mt-10 flex flex-col gap-5">
        {data?.map((item, index) => (
          <Process
            key={index}
            isOpen={openIndex === index}
            toggleOpen={() => toggleOpen(index)}
            stepNumber={index + 1}
            title={item}
          />
        ))}
      </section>
    </main>
  );
}

export function Process({ isOpen, toggleOpen, stepNumber, title }) {
  return (
    <section
      className={`${
        isOpen ? "bg-primary" : "bg-pWhite"
      } border border-b-4 rounded-3xl p-5 md:p-8 border-pBlack trans flex flex-col gap-7`}
    >
      <main className="flex items-center justify-between">
        <h3 className="flex items-center gap-4">
          <span className="font-space-grotesk text-4xl md:text-5xl">{`0${stepNumber}`}</span>
          <span className="font-space-grotesk text-lg md:text-2xl">
            {title}
          </span>
        </h3>

        <button onClick={toggleOpen}>
          <img
            className="min-h-10 h-11 max-h-full"
            src={isOpen ? minus : plus}
            alt="plus/minus"
          />
        </button>
      </main>

      <div className={`${!isOpen ? "hidden" : ""} h-[.99px] bg-pBlack`}></div>

      <div className={`${!isOpen ? "hidden" : ""}`}>
        During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.
      </div>
    </section>
  );
}
