/* eslint-disable react/prop-types */

import { FadeIn } from "./Reveal";

const About = ({ about_img }) => {
  return (
    <section
      id="about"
      className="flex md:flex-row flex-col
      md:bg-none bg-[url(./components/asset/about.png)] bg-cover bg-center bg-no-repeat mb-20"
    >
      <img
        className="aspect-square object-cover object-center md:block hidden"
        src={about_img}
        width={"50%"}
        height={"100%"}
      />
      <FadeIn delay={0.3} duration={1}>
      <div className="w-full min-h-[calc(100svh-100px)] backdrop-blur-sm">
        <h2 className="font-cinzel text-3xl md:text-5xl font-extralight mb-5 tracking-wider">
          About Me
          <hr className="w-[20%] border-2 border-links" />
        </h2>
        <p className="font-poppins font-regular text-slate-300 drop-shadow-links leading-tight text-sm">
          Greetings! I am{" "}
          <span className="text-links font-bold tracking-wider">Favor</span>, a
          highly skilled and passionate graphic designer with a strong
          commitment to creating visually captivating and impactful designs.
          With a keen eye for detail and a deep appreciation for aesthetics, I
          bring a unique blend of creativity and pro- fessionalism to every
          project I undertake.
          <br />
          <br />
          My journey in the world of graphic design has been an exciting one,
          marked by continu- ous exploration and growth. My proficiency in
          utilizing industry-standard design tools, coupled with a solid
          foundation in design principles, empowers me to craft designs that not
          only meet but exceed expectations. My portfolio showcases a diverse
          range of proj- ects, each reflecting my dedication to producing
          designs that seamlessly merge innova- tion with functionality.
          <br />
          <br />
          What sets me apart is my unwavering dedication to understanding the
          unique needs of each project and transforming them into visual
          masterpieces. I believe that effective com- munication is the
          cornerstone of successful design, and 1 am committed to working close-
          ly with clients to ensure their visions are brought to life with
          precision and flair.ln addition to my technical expertise, I bring a
          genuine passion for staying current with design trends and emerging
          technologies. This enables me to infuse fresh and contemporary
          elements into my work, ensuring that my designs are not only relevant
          but also leave a lasting im- pression.
          <br />
          <br />
          As a graphic designer, 1 take immense pride in my ability to turn
          ideas into impactful visu- als that resonate with audiences. Whether
          it
          {`'`}s crafting a brand identity, designing market- ing collateral, or
          creating stunning digital artwork, 1 am dedicated to delivering
          results that exceed expectations.
          <br />
          <br />
          Thank you for considering me for your design needs. I look forward to
          the opportunity to collaborate and bring your creative visions to
          life.
        </p>
      </div>
     </FadeIn>
    </section>
  );
};

export default About;
