import { Card } from "../../../atomic/atoms/Card/Card";
import { DropdownMenu } from "../../../atomic/molecules/DropdownMenu/DropdownMenu";
import { FavoriteIconSVG } from "../../../atomic/atoms/Icons/FavoriteIconSVG";
import { TimeSVG } from "../../../atomic/atoms/Icons/TimeSVG";
import "./styles.css";

export const HomeAllCards: React.FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <DropdownMenu />
      <div>
        <Card
          headerText="Header"
          centralText="Central Text"
          rightIcon={<FavoriteIconSVG />}
          headerIcon={<TimeSVG />}
        />
      </div>
    </div>
  );
};
