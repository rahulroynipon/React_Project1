import { NavBar } from "../global/NavBar";
import {
  Company,
  Happend,
  HeroSection,
  Services,
} from "../components/Components";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Company />
      <Services />
      <Happend />
    </>
  );
}
