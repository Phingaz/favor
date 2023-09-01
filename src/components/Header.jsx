// import { a } from "react-router-dom";
import styled from "./Header.module.css";
// import logo from "./asset/logo.png";
import { useState } from "react";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const links = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Services", link: "#services" },
    { title: "Contact", link: "#contact" },
  ];

  const shoNa = () => {
    setSh((p) => !p);
  };
  return (
    <header className={styled.header}>
      <a className="cursor-pointer hover:text-links transition-f tracking-wider">
        <h1 className="font-cinzel font-bold">Favour Agwegiokhe</h1>
        <h2 className="font-light font-cinzel text-sm">Graphic Designer</h2>
      </a>

      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
        <ul className="flex flex-col items-center h-full md:flex-row md:justify-center md:items-center gap-5 md:bg-transparent">
          {links.map((el, i) => (
            <li
              key={i}
              className="text-lg font-poppins cursor-pointer hover:text-links transition-f font-bold tracking-wider"
            >
              <a href={el.link}>{el.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="hidden lg:block button border bg-links transition-f-f hover:bg-primary border-links md:px-3 hover:border-links hover:text-links">Get in Touch</button>
    </header>
  );
};
