import ServiceCard from "../reuseables/ServiceCard.jsx";
import Typograhy from "../reuseables/Typograhy";

export default function Services() {
  return (
    <section className="width padding-x padding-y mt-16">
      <header className="flex flex-col md:flex-row gap-8 items-center justify-start">
        <Typograhy content="Services" />
        <p className="md:w-[470px] flex flex-wrap">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>

      <main>
        <ServiceCard />
      </main>
    </section>
  );
}
