import cn from "./../../lib/cn";

export default function Button({ clName, btnText = "Button" }) {
  return (
    <button
      className={cn(
        "px-5 py-3 rounded-lg border bg-pBlack text-pWhite hover:ring-2 ring-primary trans font-serif",
        clName
      )}
    >
      {btnText}
    </button>
  );
}
