import navDetails from "./../../data/navData.json";
import Logo from "./../assets/logo2.png";
import cn from "./../../lib/cn";
import linkden from "./../assets/icon/link.svg";
import facebook from "./../assets/icon/facebook.svg";
import twitter from "./../assets/icon/twitter.svg";
import Typograhy from "./../reuseables/Typograhy";
import Button from "./../reuseables/Button";

export default function Footer() {
  return (
    <main className="width padding-x pt-2 lg:pt-2 xxl:pt-4 mt-12 ">
      <section className="bg-pBlack rounded-t-2xl p-7 md:p-12 text-pWhite flex flex-col gap-9 md:gap-16">
        <FooterHeader />
        <FooterContact />

        <div className="h-[0.99px] bg-pWhite"></div>
        <FooterRight />
      </section>
    </main>
  );
}

export function FooterHeader() {
  const social = [linkden, facebook, twitter];

  return (
    <header className="flex flex-col justify-center items-center md:flex-row md:justify-between flex-wrap gap-7">
      <section>
        <img className="min-h-6 h-8 max-h-9" src={Logo} alt="Positivus_Logo" />
      </section>
      <ul className="flex flex-col items-center justify-center md:flex-row gap-5 ">
        {navDetails?.map((item, index) => (
          <li
            key={item?.id}
            className={cn("", {
              hidden: index === navDetails.length - 1,
            })}
          >
            <a href={item?.link}>{item?.context}</a>
          </li>
        ))}
      </ul>

      <ul className="hidden lg:flex gap-5 items-center justify-center">
        {social?.map((item, index) => (
          <li key={index}>
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
    </header>
  );
}

export function FooterContact() {
  return (
    <main className="grid md:grid-cols-3 items-center gap-7 md:gap-10 ">
      <section className="flex flex-col items-center justify-between text-center md:text-left md:items-start gap-3 font-space-grotesk">
        <Typograhy
          clName={"text-pBlack text-xl md:self-start mb-2"}
          content={"Contact us:"}
        />
        <h6>Email: info@positivus.com</h6>
        <h6>Phone: 555-567-8901</h6>

        <p>
          Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
        </p>
      </section>

      <section className="md:col-span-2 flex flex-col lg:flex-row gap-5 py-12 px-6 rounded-xl bg-gray">
        <input
          className="w-full rounded-lg px-4 py-3 bg-gray border"
          type="email"
          placeholder="Email"
        />
        <Button
          btnText={"Subscribe to news"}
          clName={"bg-primary text-pBlack hover:ring-pWhite w-full"}
        />
      </section>
    </main>
  );
}

export function FooterRight() {
  return (
    <section className="flex flex-col md:flex-row md:gap-12">
      <p>© 2024 Positivus. All Rights Reserved.</p>
      <p>Made by Rahul Roy Nipon</p>
    </section>
  );
}
