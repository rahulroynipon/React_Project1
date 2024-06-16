import HeaderTitle from "../reuseables/HeaderTitle";
import arrow from "./../assets/icon/rightuplimeblack.png";
import cn from "../../lib/cn";

export default function CaseStudies() {
  return (
    <main id="usecases" className="width mt-20 padding-x padding-y">
      <HeaderTitle
        title={"Case Studies"}
        content={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />

      <section className="md:bg-pBlack rounded-xl mt-16 flex gap-5 md:gap-0 overflow-x-auto scrollBAR">
        <CaseCard
          content={
            "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
          }
        />
        <div className="w-1 my-12 bg-pWhite hidden md:block"></div>

        <CaseCard
          content={
            "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
          }
        />
        <div className="w-1 my-12 bg-pWhite hidden md:block"></div>
        <CaseCard
          content={
            "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
          }
        />
      </section>
    </main>
  );
}

export function CaseCard({ content, clName }) {
  return (
    <div>
      <main
        className={cn(
          "w-[300px] md:w-full p-7 md:p-12 text-pWhite flex flex-col items-start gap-5 shrink bg-pBlack rounded-xl",
          clName
        )}
      >
        <p>{content}</p>
        <button className="text-primary flex items-center justify-center">
          <p>Learn more</p>
          <img src={arrow} alt="more" />
        </button>
      </main>
    </div>
  );
}
