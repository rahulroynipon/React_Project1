import { useEffect, useRef, useState } from "react";
import logo from "./../assets/logo1.png";
import { CiMenuBurger } from "react-icons/ci";
import cn from "../../lib/cn";

export function NavBar() {
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

  return (
    <main className=" z-30 bg-white sticky top-0 flex justify-between items-center width padding-x padding-y">
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
            <a href={item.link}>{item.context}</a>
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
    </main>
  );
}

export const navDetails = [
  {
    id: 1,
    context: "About us",
    link: "#",
  },
  {
    id: 2,
    context: "Services",
    link: "#",
  },
  {
    id: 3,
    context: "Use Cases",
    link: "#",
  },
  {
    id: 4,
    context: "Pricing",
    link: "#",
  },
  {
    id: 5,
    context: "Blog",
    link: "#",
  },
  {
    id: 6,
    context: "Request a quote",
    link: "#",
  },
];
