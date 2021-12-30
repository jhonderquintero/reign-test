import { IHomeContent } from "./definitions";
import "./styles.css";

export const HomeContent: React.FC<IHomeContent> = ({
  Header,
  CentralContent,
  Footer,
}) => {
  return (
    <div className="content">
      <div className="content__header">{Header}</div>
      <div className="content__central-content">{CentralContent}</div>
      <div className="content__footer">{Footer}</div>
    </div>
  );
};
