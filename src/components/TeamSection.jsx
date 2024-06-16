import Button from "../reuseables/Button";
import HeaderTitle from "../reuseables/HeaderTitle";
import TeamCard from "../reuseables/TeamCard";

import member1 from "./../assets/img/team1.png";
import member2 from "./../assets/img/team2.png";
import member3 from "./../assets/img/team3.png";

export default function TeamSection() {
  return (
    <main
      id="team"
      className="width padding-x padding-y mt-16 flex flex-col gap-7"
    >
      <HeaderTitle
        title={"Team"}
        content={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />

      <section className="md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {TeamDetails?.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </section>
      <Button btnText="See all team" clName={"md:self-end"} />
    </main>
  );
}

export const TeamDetails = [
  {
    id: "1",
    name: "John Smith",
    position: "CEO and Founder",
    img: member1,
    content:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: "2",
    name: "Jane Doe",
    position: "Director of Operations",
    img: member2,
    content:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: "3",
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    img: member3,
    content:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: "4",
    name: "Emily Johnson",
    position: "PPC Manager",
    img: member3,
    content:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: "5",
    name: "Brian Williams",
    position: "Social Media Specialist",
    img: member2,
    content:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: "6",
    name: "Sarah Kim",
    position: "Content Creator",
    img: member1,
    content:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
