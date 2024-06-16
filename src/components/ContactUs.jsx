import HeaderTitle from "./../reuseables/HeaderTitle";
import contactIMG from "./../assets/img/contact.png";
import Button from "../reuseables/Button";

export default function ContactUS() {
  return (
    <main className="mt-16 width padding-x padding-y">
      <HeaderTitle
        title={"Contact Us"}
        content={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}
      />

      <div className="flex flex-col md:flex-row justify-between items-center gap-16 bg-pWhite p-5 md:p-10 rounded-2xl mt-10">
        <form className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex gap-7">
            <div className="flex gap-2 items-center">
              <input
                className="custom-radio "
                type="radio"
                name="gender"
                id="gender"
                checked
              />
              <label htmlFor="gender">Say Hi</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="custom-radio "
                type="radio"
                name="gender"
                id="gender"
              />
              <label htmlFor="gender">Get a Quote</label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="px-4 py-3 rounded-xl border border-pBlack"
              type="text"
              placeholder="Name"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email*</label>
            <input
              className="px-4 py-3 rounded-xl border border-pBlack"
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message*</label>
            <textarea
              className="px-4 py-3 rounded-xl border border-pBlack"
              placeholder="Message"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <Button btnText="Send Message" />
        </form>

        <section className="hidden md:flex w-full md:w-1/2 overflow-hidden">
          <img
            src={contactIMG}
            alt="contact"
            className="w-full  relative -right-[50%] "
          />
        </section>
      </div>
    </main>
  );
}
