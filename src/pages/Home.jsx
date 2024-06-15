import { NavBar } from "../global/NavBar";
import {
  CaseStudies,
  Company,
  Happend,
  HeroSection,
  Services,
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
    </>
  );
}
