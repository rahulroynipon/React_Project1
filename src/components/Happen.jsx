import Button from "../reuseables/Button";
import IMG from "../assets/img/proposal1.png";

export default function Happend() {
  return (
    <main className="mx-12 width padding-x padding-y mt-20 ">
      <section className="bg-pWhite rounded-lg p-6 md:p-12 grid md:grid-cols-2 md:grid-rows-2 gap-5 md:gap-8">
        <h1 className="self-end font-space-grotesk text-3xl">
          Let’s make things happen
        </h1>
        <section className="hidden md:col-span-1 md:row-span-2 md:flex  items-center justify-center">
          <img className="max-w-[17rem]" src={IMG} alt="proposal" />
        </section>
        <section className="flex flex-col gap-6">
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button btnText="Get your free proposal" clName={"self-start"} />
        </section>
      </section>
    </main>
  );
}
