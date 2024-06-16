export default function TestimonialMessage() {
  return (
    <section className="w-[280px] md:w-[500px] shrink-0">
      <main className="border relative z-10 rounded-3xl border-primary">
        <p className="p-4 md:p-12">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </p>

        <div className="testimonial"></div>
      </main>

      <p className="flex flex-col  mt-8 ml-12">
        <span className="font-space-grotesk text-primary ">John Smith</span>
        <span>Marketing Director at XYZ Corp</span>
      </p>
    </section>
  );
}
