import { useEffect, useRef, useState } from "react";
import logo from "./../assets/logo1.png";
import { CiMenuBurger } from "react-icons/ci";
import cn from "../../lib/cn";
import navDetails from "./../../data/navData.json";
import { topAnimate } from "../animation/AnimationExport";
import { motion } from "framer-motion";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggler = useRef(null);
  const navItem = useRef(null);

  useEffect(() => {
    const handleNav = (e) => {
      if (
        toggler.current &&
        navItem.current &&
        !toggler.current.contains(e.target) &&
        !navItem.current.contains(e.target)
      ) {
        setNavOpen(false);
      }
    };

    window.addEventListener("click", handleNav);

    return () => window.removeEventListener("click", handleNav);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 100; // Adjust this value to control the offset from the top
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <motion.main
      variants={topAnimate}
      initial="initial"
      animate="animate"
      className=" z-30 bg-white sticky top-0 flex justify-between items-center width padding-x padding-y"
    >
      {/* logo start */}
      <h1>
        <img className="min-h-12 h-10 max-h-16" src={logo} alt="Company Logo" />
      </h1>
      {/* logo end */}

      {/* nav link start */}
      <ul
        ref={navItem}
        className={cn(
          "z-40 trans flex flex-col absolute top-0 bottom-0 h-screen bg-pBlack text-pWhite px-14 md:px-28 lg:h-full lg:flex-row lg:static lg:px-0 lg:bg-white lg:text-black justify-center items-center gap-10",
          {
            "left-0": navOpen,
            "-left-[300px] md:-left-[400px]": !navOpen,
          }
        )}
      >
        {navDetails.map((item) => (
          <li
            key={item.id}
            className={cn("cursor-pointer", {
              "border px-3 py-2 rounded-lg border-pWhite lg:border-pBlack":
                item?.id === 6,
            })}
          >
            <button onClick={() => handleScroll(item?.link)}>
              {item.context}
            </button>
          </li>
        ))}
      </ul>
      {/* nav link end */}

      {/* menu toggler button start */}
      <button
        ref={toggler}
        onClick={() => setNavOpen((prev) => !prev)}
        className="lg:hidden"
      >
        <CiMenuBurger size={30} />
      </button>
      {/* menu toggler button end */}
    </motion.main>
  );
}
