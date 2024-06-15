import cn from "../../lib/cn";

export default function Typograhy({ clName, content = "text" }) {
  return (
    <span
      className={cn(
        "bg-primary px-3 py-1 font-space-grotesks text-3xl rounded-lg",
        clName
      )}
    >
      {content}
    </span>
  );
}
