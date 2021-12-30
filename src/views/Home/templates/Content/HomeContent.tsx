import { IHomeContent } from "./definitions";
import "./styles.css";

export const HomeContent: React.FC<IHomeContent> = ({
  Header,
  CentralContent,
  Footer,
}) => {
  return (
    <div className="home">
      <div className="home__header">{Header}</div>
      <div className="home__central-content">{CentralContent}</div>
      <div className="home__footer">{Footer}</div>
    </div>
  );
};
