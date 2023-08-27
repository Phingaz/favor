import styled from "./Header.module.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const shoNa = () => {
    setSh((p) => !p);
  };

  return (
    <header className={styled.header}>
      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>
      <h1 onClick={() => setSh(false)}>
        <HashLink smooth to="/#">
          <div className={styled.logo}>
            <h1>Favor Agwegiokhe</h1>
            <h2>Graphic Designer</h2>
          </div>
        </HashLink>
      </h1>
      <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
        <HashLink
          className={styled.nav_links}
          onClick={() => setSh(false)}
          smooth
          to="/#"
        >
          Home
        </HashLink>
        <HashLink
          className={styled.nav_links}
          onClick={() => setSh(false)}
          smooth
          to="#about"
        >
          About
        </HashLink>
        <HashLink
          className={styled.nav_links}
          onClick={() => setSh(false)}
          smooth
          to="#project"
        >
          Projects
        </HashLink>
        <HashLink
          className={styled.nav_links}
          onClick={() => setSh(false)}
          smooth
          to="#work"
        >
          Experience
        </HashLink>
        <HashLink
          className={styled.nav_links}
          onClick={() => setSh(false)}
          smooth
          to="/#contact"
        >
          Contact Me
        </HashLink>
      </nav>

      <HashLink className={styled.services} smooth to="/#">
        Get in touch
      </HashLink>
    </header>
  );
};
