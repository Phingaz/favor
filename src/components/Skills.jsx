import il from "./asset/logos/il.png";
import ps from "./asset/logos/ps.png";
import xd from "./asset/logos/xd.png";
import fg from "./asset/logos/fg.png";
import cd from "./asset/logos/cd.png";

const Skills = () => {
  const software_skill = [
    { id: 1, img: il, title: "Illustrator", from: 0, level: 90 },
    { id: 2, img: ps, title: "Photoshop", from: 0, level: 50 },
    { id: 3, img: xd, title: "Xd", from: 0, level: 60 },
    { id: 4, img: fg, title: "Figma", from: 0, level: 70 },
    { id: 5, img: cd, title: "Corel Draw", from: 0, level: 100 },
  ];

  const design_skills = [
    { id: 1, img: il, text: "Visual Communication" },
    { id: 2, img: il, text: "Typography" },
    { id: 3, img: il, text: "Layout and Composition" },
    { id: 4, img: il, text: "Web Design" },
    { id: 5, img: il, text: "Attention to Detail" },
    { id: 6, img: il, text: "Communication" },
    { id: 7, img: il, text: "Creativity" },
  ];

  const license = [
    { id: 1, title: "Introduction to Programming", location: "W3Schools" },
    {
      id: 2,
      title: "Programming with html, css and javascript",
      location: "Udemy",
    },
  ];

  return (
    <div
      id="skills"
      className="flex md:flex-row flex-col min-h-[calc(100svh-100px)] w-full md:gap-5 gap-10 mb-20"
    >
      <div className="flex flex-col md:gap-32 gap-10 md:w-[60%]">
        <div className="w-full">
          <h4 className="md:mb-10 mb-5 uppercase text-2xl font-bold">
            Software skill
          </h4>
          {software_skill.map((skill) => (
            <div
              className="flex gap-5 justify-evenly items-center md:mb-5 mb-3"
              key={skill.id}
            >
              <img width={"50px"} src={skill.img} />
              <h5 className="min-w-[20%]">{skill.title}</h5>

              <div className="min-w-[50%] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div
                  className="bg-links h-1.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h4 className="md:mb-10 mb-5 uppercase text-2xl font-bold">
            license & certification
          </h4>
          {license.map((el) => (
            <div key={el.id} className="flex flex-wrap mb-2">
              <h3 className="font-bold uppercase mr-1">{el.title} -</h3>
              <h4 className="uppercase text-slate-400">{el.location}</h4>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="md:mb-10 mb-5 uppercase text-2xl font-bold">
          Design Skill
        </h4>
        {design_skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-2 mb-5">
            <img src={skill.img} width={"50px"} />
            <h6 className="font-bold tracking-wide">{skill.text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
