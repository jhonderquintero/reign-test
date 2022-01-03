import { HeaderTitle } from "../../atomic/atoms/HeaderTitle/HeaderTitle";
import { Link } from "react-router-dom";
import { HomeHeader } from "../../views/Home/templates/Header/HomeHeader";
import "./styles.css";

export const NotFound = () => {
  return (
    <div>
      <HomeHeader LeftElement={<HeaderTitle text="Hacker News" />} />
      <div className="not-found">
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};
