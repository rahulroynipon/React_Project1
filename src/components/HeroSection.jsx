import Button from "../reuseables/Button";
import headerIMG from "./../assets/img/header1.png";

export default function HeroSection() {
  return (
    <main className="padding-x padding-y width">
      <section>Navigating the digital landscape for success</section>
      <section>
        <img src={headerIMG} alt="header" />
      </section>
      <section>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <Button />
      </section>
    </main>
  );
}
