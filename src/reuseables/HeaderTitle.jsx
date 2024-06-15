import Typograhy from "./Typograhy";

export default function HeaderTitle({ clName, title, content }) {
  return (
    <header className="flex flex-col md:flex-row gap-8 items-center justify-start">
      <Typograhy content={title} clName={clName} />
      <p className="md:w-[470px] flex flex-wrap">{content}</p>
    </header>
  );
}
