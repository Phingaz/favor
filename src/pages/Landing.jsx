import Wrapper from "../components/Wrapper";
import { Home } from "../components/Home";
import "./Landing.scss";

export const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <Home />
      </div>
    </Wrapper>
  );
};
