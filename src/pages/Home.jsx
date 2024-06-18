import { NavBar, Footer } from "../global/GlobalExport";
import {
  CaseStudies,
  Company,
  ContactUS,
  Happend,
  HeroSection,
  Services,
  TeamSection,
  Testimonials,
  WrokingProcess,
} from "../components/Components";

import { Reval } from "./../animation/AnimationExport";

export default function Home() {
  return (
    <>
      <NavBar />

      <Reval children={<HeroSection />} />
      <Reval children={<Company />} />

      <Reval children={<CaseStudies />} />
      <Reval children={<WrokingProcess />} />
      <Reval children={<TeamSection />} />

      <Reval children={<Testimonials />} />
      <Reval children={<ContactUS />} />
      <Reval children={<Footer />} />
    </>
  );
}
