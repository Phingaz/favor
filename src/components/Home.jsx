import styled from "./Home.module.css";
import { HashLink } from "react-router-hash-link";
import img from "./asset/background.png";

export const Home = () => {
  return (
    <div className="wrapper">
      <main id="#" className={styled.home}>
        <div className={styled.text}>
          <h1>
            Favor <br /> <span>Agwegiokhe</span>
          </h1>
          <h2>Graphic Designer</h2>
          <div className={styled.btns}>
            <button>Resume</button>
            <button>Portfolio</button>
          </div>
        </div>
        <div className={styled.img}>
          <img className={styled.hero} src={img} />
        </div>
      </main>
    </div>
  );
};
