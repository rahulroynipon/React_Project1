import Button from "../reuseables/Button";
import IMG from "../assets/img/proposal1.png";

export default function Happend() {
  return (
    <main className="mx-12 width padding-x padding-y mt-20 ">
      <section className="bg-pWhite p-6 md:p-20 flex gap-10 rounded-3xl">
        <div className="flex flex-col  gap-5">
          <h1 className="font-space-grotesk text-3xl">
            Let’s make things happen
          </h1>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button btnText="Get your free proposal" clName={"md:self-start"} />
        </div>
        <div className="w-full hidden md:flex items-center justify-end h-44 ">
          <img src={IMG} alt="proposal" />
        </div>
      </section>
    </main>
  );
}
