import Button from "../reuseables/Button";
import headerIMG from "./../assets/img/header1.png";

export default function HeroSection() {
  return (
    <main className="padding-x padding-y mt-5 lg:mt-10 width grid lg:grid-cols-12 lg:grid-row-6 gap-10">
      <section className="lg:col-span-4 lg:row-span-3 lg:self-end">
        <h1 className="font-bold text-3xl lg:text-5xl ">
          Navigating the digital landscape for success
        </h1>
      </section>
      <section className="lg:col-span-8 lg:row-span-6 flex justify-center items-center">
        <img src={headerIMG} alt="header" />
      </section>
      <section className="lg:col-span-4 lg:row-span-3 flex flex-col gap-10">
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
{
  /* <main className=" grid md:grid-cols-12 md:grid-rows-6 gap-10">




<section className=" order-3  md:col-span-4 md:row-span-4">
  
</section>
</main> */
}
