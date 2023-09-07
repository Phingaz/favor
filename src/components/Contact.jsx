import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center gap-10 mb-20"
    >
      <h4 className="font-cinzel text-3xl md:text-5xl font-extralight  mb-5 tracking-wider">
        Contact Us
        <hr className="w-[30%] border-2 border-links" />
      </h4>
      <div className="flex flex-col md:justify-between w-full md:flex-row gap-10 ">
        <div className="flex flex-col gap-7 py-4">
          <div>
            <h3 className="text-1xl">
              FEEL FREE TO CONTACT US,
              <br /> WE WILL GET BACK TO YOU AS SOON AS POSSIBLE
            </h3>
          </div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="uppercase" htmlFor="name">
                Name:
              </label>
              <input
                className="border-0 outline-0 bg-inherit border-b-2"
                id="name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase" htmlFor="email">
                Email:
              </label>
              <input
                className="border-0 outline-0 bg-inherit border-b-2"
                id="email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase" htmlFor="message">
                Message:
              </label>
              <textarea
                className="border-0 outline-0 bg-inherit border-b-2"
                id="message"
                type="text"
              />
            </div>
            <button className="button uppercase bg-links text-secondary py-2 px-4 mt-5">
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="uppercase text-3xl font-bold mb-5">Info</h2>
          <a href="mailto:favouragwero@gmail.com" className="uppercase ">
            <EmailOutlinedIcon className="mr-3 text-inherit" />
            favouragwero@gmail.com
          </a>
          <a href="tel:+2348146082469">
            {" "}
            <PhoneCallbackOutlinedIcon className="mr-3 text-inherit" />
            +2348146082469
          </a>
          <a href="" className="uppercase ">
            {" "}
            <LinkedInIcon className="mr-3 text-inherit" />
            FAVOURAGWERO/LINKEDIN.COM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
