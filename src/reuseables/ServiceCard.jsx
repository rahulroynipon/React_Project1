import Typograhy from "./Typograhy";
import cn from "../../lib/cn";

export default function ServiceCard({ card }) {
  return (
    <main
      className={cn(
        "border border-b-4 border-pBlack rounded-2xl p-5 md:p-7 grid grid-cols-2 grid-rows-2",
        card?.clName
      )}
    >
      <div className="flex flex-col row-span-1 col-span-2 md:col-span-1 order-1">
        <Typograhy
          content={card?.text1}
          clName={`self-start text-2xl ${card?.textCL}`}
        />
        <Typograhy
          content={card?.text2}
          clName={`self-start text-2xl ${card?.textCL}`}
        />
      </div>

      <section className=" row-span-1 md:row-span-2 flex items-center justify-center order-3 md:order-2">
        <img src={card?.mainIMG} alt={card?.mainALT} />
      </section>

      <button className="row-span-1 self-end flex items-center gap-5 order-2 md:order-3">
        <img src={card?.arrow} alt="arrow" />
        <p className={`hidden md:block ${card?.moreCL}`}>Learn more</p>
      </button>
    </main>
  );
}
