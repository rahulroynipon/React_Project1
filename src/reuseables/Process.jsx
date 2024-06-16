import plus from "./../assets/icon/plus.png";
import minus from "./../assets/icon/minus.png";
import cn from "./../../lib/cn";

export default function Process({
  isOpen,
  toggleOpen,
  stepNumber,
  title,
  content,
}) {
  return (
    <section
      className={cn(
        "border border-b-4 rounded-3xl p-5 md:p-8 border-pBlack trans flex flex-col gap-7",
        {
          "bg-primary": isOpen,
          "bg-pWhite": !isOpen,
        }
      )}
    >
      <main className="flex items-center justify-between">
        <h3 className="flex items-center gap-4">
          <span className="font-space-grotesk text-4xl md:text-5xl">{`0${stepNumber}`}</span>
          <span className="font-space-grotesk text-lg md:text-2xl">
            {title}
          </span>
        </h3>

        <button onClick={toggleOpen}>
          <img
            className="min-h-10 h-11 max-h-full"
            src={isOpen ? minus : plus}
            alt="plus/minus"
          />
        </button>
      </main>

      <div
        className={cn("h-[.99px] bg-pBlack", {
          hidden: !isOpen,
        })}
      ></div>

      <div className={`${!isOpen && "hidden"}`}>{content}</div>
    </section>
  );
}
