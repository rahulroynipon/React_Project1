import HeaderTitle from "../reuseables/HeaderTitle";
import TeamCard from "../reuseables/TeamCard";

export default function TeamSection() {
  return (
    <main className="width padding-x padding-y mt-16">
      <HeaderTitle
        title={"Team"}
        content={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />

      <section className="mt-8 md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </section>
    </main>
  );
}
