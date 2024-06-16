import Button from "../reuseables/Button";
import headerIMG from "./../assets/img/header1.png";

export default function HeroSection() {
  return (
    <main className="padding-x padding-y mt-5 md:mt-12 width grid md:grid-cols-12 md:grid-row-6 gap-10">
      <section className="md:col-span-5 lg:col-span-4 md:row-span-3 md:self-end">
        <h1 className="font-space-grotesk text-3xl lg:text-5xl ">
          Navigating the digital landscape for success
        </h1>
      </section>
      <section className="lg:col-span-8 md:col-span-7 md:row-span-6 flex items-center justify-center md:justify-end ">
        <img src={headerIMG} alt="header" />
      </section>
      <section className="lg:col-span-4 md:col-span-5 md:row-span-3 flex flex-col gap-10">
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <Button btnText={"Book a consultation"} />
      </section>
    </main>
  );
}
