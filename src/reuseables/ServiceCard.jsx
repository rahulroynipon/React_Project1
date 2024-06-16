import Typograhy from "./Typograhy";
import cn from "../../lib/cn";

export default function ServiceCard({ card }) {
  return (
    <main
      className={cn(
        "border border-b-4 border-pBlack rounded-2xl p-5 md:p-7 flex justify-between gap-5",
        card?.clName
      )}
    >
      <section className="flex  flex-col justify-between gap-5 shrink-0">
        <div className="flex flex-col ">
          <Typograhy
            content={card?.text1}
            clName={`self-start text-2xl  ${card?.textCL}`}
          />
          <Typograhy
            content={card?.text2}
            clName={`self-start text-2xl ${card?.textCL}`}
          />
        </div>
        <button className="flex items-center gap-4 ">
          <img src={card?.arrow} alt="arrow" />
          <p className={`hidden md:block shrink-0 ${card?.moreCL}`}>
            Learn more
          </p>
        </button>
      </section>
      <section className="flex items-center justify-end">
        <img src={card?.mainIMG} alt={card?.mainALT} />
      </section>
    </main>
  );
}
