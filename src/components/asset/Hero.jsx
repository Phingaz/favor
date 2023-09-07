/* eslint-disable react/prop-types */
import {Reveal} from "./Reveal"

const Hero = ({ bg }) => {
  return (
    <main
      id="home"
      className="flex w-full min-h-[calc(100svh-100px)] md:bg-none bg-[url(./components/asset/hero.png)] bg-cover bg-center bg-no-repeat mb-1"
    >
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center w-full ">
        <div className="flex flex-col w-full md:w-6/12">
          <Reveal>
          <h1 className="md:text-4xl text-2xl font-medium font-cinzel drop-shadow-links">
            Favour
            <br />{" "}
            <span className="md:text-6xl text-4xl font-bold">Agwegiokhe</span>
          </h1>
          </Reveal>
          <Reveal delay={0.15}>
          <h2 className="font-cinzel text-2xl md:text-5xl font-regular drop-shadow-links">
            Graphic Designer
          </h2>
         </Reveal>
          <Reveal delay={0.2}>
          <div className="flex justify-between items-center md:w-sm w-full mt-20">
            <button className="button border border-secondary px-5 md:px-10 hover:bg-links hover:border-links">
              Resume
            </button>
            <button className="button border px-5 md:px-10 bg-links hover:bg-primary hover:text-links hover:border-links border-links">
              Portfolio
            </button>
          </div>
        </Reveal>
        </div>
        <div className="md:flex hidden justify-center items-center h-full w-[50%]">
          <img className="" src={bg} width={"100%"} height={"100%"} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
