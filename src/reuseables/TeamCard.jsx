import icon from "./../assets/icon/linkden.svg";

export default function TeamCard({ data }) {
  return (
    <main className="border border-b-4 border-pBlack rounded-2xl p-5 md:p-10 flex flex-col gap-6">
      <section className="flex justify-between items-center gap-4">
        <img className="mn-h-16 h-20 max-h-22" src={data?.img} alt="profile" />
        <h4 className="flex flex-col font-space-grotesk self-end">
          <span className="text-2xl">{data?.name}</span>
          <span>{data?.position}</span>
        </h4>
        <div className="border rounded-full self-start p-2 bg-pBlack">
          <img src={icon} alt="linkden" />
        </div>
      </section>

      <div className="h-[1.5px] bg-pBlack/50"></div>
      <section>{data?.content}</section>
    </main>
  );
}
