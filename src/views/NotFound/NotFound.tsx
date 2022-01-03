import { HeaderTitle } from "../../atomic/atoms/HeaderTitle/HeaderTitle";
import { Link } from "react-router-dom";
import { HomeHeader } from "../../views/Home/templates/Header/HomeHeader";
import "./styles.css";
import { NotFoundLottie } from "../../atomic/atoms/Lotties/NotFoundLottie";

export const NotFound = () => {
  return (
    <div>
      <HomeHeader LeftElement={<HeaderTitle text="Hacker News" />} />
      <div className="not-found">
        <NotFoundLottie />
        <Link to="/">
          <p className="not-found__link">Go Home</p>
        </Link>
      </div>
    </div>
  );
};
