import { useState } from "react";

const Header = () => {
  const links = [
    { link: "#", title: "home" },
    { link: "#", title: "home" },
    { link: "#", title: "home" },
    { link: "#", title: "home" },
  ];
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 flex justify-between items-center h-14 w-full md:px-20 px-5">
      <div className="text-center">
        <h1 className="font-bold text-base uppercase">Favor Agwegiokhe</h1>
        <h2 className="text-1x1 text-zinc-400 uppercase">Graphic Designer</h2>
      </div>
      <ul
        className={`${
          navIsOpen ? "animate-open w-[40%] opacity-100 flex" : "animate-close"
        } nav_link `}
      >
        {links.map((el, i) => {
          return (
            <li key={i} className="transition hover:text-links">
              <a href={el.link}>{el.title}</a>
            </li>
          );
        })}
      </ul>
      <button className={`hidden md:block button bg-main`}>Get in touch</button>
      <button
        onClick={() => setNavIsOpen((p) => !p)}
        className="md:hidden fixed top-3 right-3 z-50 flex flex-col justify-center items-center gap-2 h-10 w-9"
      >
        <span
          className={`ham ${
            navIsOpen ? "translate-y-1 rotate-45" : "ham-close"
          }`}
        ></span>
        <span className={`ham ${navIsOpen ? "opacity-0" : "ham-close"}`}></span>
        <span
          className={`ham ${
            navIsOpen ? "-translate-y-4 -rotate-45" : "ham-close"
          }`}
        ></span>
      </button>
    </header>
  );
};

export default Header;
