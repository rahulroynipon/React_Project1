import HeaderTitle from "../reuseables/HeaderTitle";
import TestimonialMessage from "../reuseables/TestimonialMessage";

export default function Testimonials() {
  return (
    <main className="width padding-x padding-y mt-16 flex flex-col gap-10">
      <HeaderTitle
        title={"Testimonials"}
        content={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />

      <section className="bg-pBlack p-9 md:p-12 rounded-3xl text-pWhite flex gap-10 overflow-x-auto scrollBAR">
        <TestimonialMessage />
        <TestimonialMessage />
        <TestimonialMessage />
      </section>
    </main>
  );
}
