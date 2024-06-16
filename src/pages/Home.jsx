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

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Company />
      <Services />
      <Happend />
      <CaseStudies />
      <WrokingProcess />
      <TeamSection />
      <Testimonials />
      <ContactUS />
      <Footer />
    </>
  );
}
