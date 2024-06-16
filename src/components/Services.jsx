import ServiceCard from "../reuseables/ServiceCard.jsx";
import Typograhy from "../reuseables/Typograhy";
import services1 from "./../assets/img/services1.png";
import services2 from "./../assets/img/services2.png";
import services3 from "./../assets/img/services3.png";
import services4 from "./../assets/img/services4.png";
import services5 from "./../assets/img/services5.png";
import services6 from "./../assets/img/services6.png";

import arrow1 from "./../assets/icon/rightuplimeblack.png";
import arrow2 from "./../assets/icon/rightupblackwhite.png";
import HeaderTitle from "../reuseables/HeaderTitle.jsx";

export default function Services() {
  return (
    <section id="services" className="width padding-x padding-y mt-16">
      <HeaderTitle
        title={"Services"}
        content={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />

      <main className="grid md:grid-cols-2 gap-10 mt-16">
        {serviceDetails?.map((item) => (
          <ServiceCard key={item?.id} card={item} />
        ))}
      </main>
    </section>
  );
}

export const serviceDetails = [
  {
    id: "1",
    clName: "bg-pWhite",
    textCL: "",
    text1: "Search engine",
    text2: "optimization",
    mainIMG: services1,
    mainALT: "services1",
    arrow: arrow1,
    moreCL: "",
  },
  {
    id: "2",
    clName: "bg-primary",
    textCL: "bg-pWhite",
    text1: "Pay-per-click",
    text2: "advertising",
    mainIMG: services2,
    mainALT: "services2",
    arrow: arrow1,
  },
  {
    id: "3",
    clName: "bg-pBlack",
    textCL: "bg-pWhite",
    text1: "Social Media",
    text2: "Marketing",
    mainIMG: services3,
    mainALT: "",
    arrow: arrow2,
    moreCL: "text-pWhite",
  },
  {
    id: "4",
    clName: "bg-pWhite",
    textCL: "bg-primary",
    text1: "Email",
    text2: "Marketing",
    mainIMG: services4,
    mainALT: "services4",
    arrow: arrow1,
    moreCL: "",
  },
  {
    id: "5",
    clName: "bg-primary",
    textCL: "bg-pWhite",
    text1: "Content",
    text2: "Creation",
    mainIMG: services5,
    mainALT: "services5",
    arrow: arrow1,
    moreCL: "",
  },
  {
    id: "6",
    clName: "bg-pBlack",
    textCL: "bg-pWhite",
    text1: "Analytics and",
    text2: "Tracking",
    mainIMG: services6,
    mainALT: "services6",
    arrow: arrow2,
    moreCL: "text-pWhite",
  },
];
