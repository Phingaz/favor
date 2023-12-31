import logo from "./asset/services/logo.png";
import branding from "./asset/services/branding.png";
import packages from "./asset/services/package.png";
import computer from "./asset/services/computer.png";
import print from "./asset/services/print.png";
import reading from "./asset/services/reading.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: logo,
      title: "Logo",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
      id: 2,
      img: branding,
      title: "Branding",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
      id: 3,
      img: packages,
      title: "Packaging",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
      id: 4,
      img: computer,
      title: "UI/UX",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
      id: 5,
      img: print,
      title: "Print Design",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
      id: 6,
      img: reading,
      title: "Illustration",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center gap-10 mb-20"
    >
      <h4 className="font-cinzel text-3xl md:text-5xl font-extralight  mb-5 tracking-wider">
        Services <hr className="w-[30%] border-2 border-links" />
      </h4>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-32">
        {services.map((el) => (
          <div
            key={el.id}
            className=" flex flex-col justify-center items-center rounded-3xl p-5 text-center gap-3 bg-zinc-900"
          >
            <img src={el.img} width={"80px"} />
            <h6 className="text-3xl font-bold uppercase">{el.title}</h6>
            <p className="leading-tight tracking-tight text-slate-300">
              {el.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
