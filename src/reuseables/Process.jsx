import plus from "./../assets/icon/plus.png";
import minus from "./../assets/icon/minus.png";
import cn from "./../../lib/cn";
import { useRef, useEffect, useState } from "react";

export default function Process({
  isOpen,
  toggleOpen,
  stepNumber,
  title,
  content,
}) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <section
      className={cn(
        "border border-b-4 rounded-3xl p-5 md:p-8 border-pBlack trans flex-col  gap-3",
        {
          "bg-primary flex ": isOpen,
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
        ref={contentRef}
        className={cn("trans overflow-hidden")}
        style={{
          maxHeight: maxHeight,
        }}
      >
        <div className="p-5">
          <div className="bg-pBlack h-[0.99px]"></div>

          <p className="mt-[1.9rem]">{content}</p>
        </div>
      </div>
    </section>
  );
}
