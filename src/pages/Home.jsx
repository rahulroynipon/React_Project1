import { NavBar, Footer } from "../global/GlobalExport";
import {
  CaseStudies,
  Company,
  ContactUS,
  Happend,
  HeroSection,
  Services,
  TeamSection,
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
      <ContactUS />
      <Footer />
    </>
  );
}
