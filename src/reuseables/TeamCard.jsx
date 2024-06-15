import img from "./../assets/img/team1.png";
import icon from "./../assets/icon/linkden.svg";

export default function TeamCard() {
  return (
    <main className="border border-b-4 border-pBlack rounded-2xl p-5 md:p-10 flex flex-col gap-6">
      <section className="flex justify-between items-end">
        <img src={img} alt="" />
        <h4 className="flex flex-col font-space-grotesk">
          <span className="text-2xl">John Smith</span>
          <span>CEO and Founder</span>
        </h4>
        <div className="border rounded-full self-start p-2 bg-pBlack">
          <img src={icon} alt="" />
        </div>
      </section>

      <div className="h-[1.5px] bg-pBlack/50"></div>
      <section>
        10+ years of experience in digital marketing. Expertise in SEO, PPC, and
        content strategy
      </section>
    </main>
  );
}
