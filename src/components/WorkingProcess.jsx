import { useState } from "react";
import HeaderTitle from "./../reuseables/HeaderTitle";
import Process from "./../reuseables/Process.jsx";

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
            content={
              " During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
        ))}
      </section>
    </main>
  );
}
