import { useLocalStorageState } from "../../../hooks/useLocalStorageState";
import "./styles.css";
import { Card } from "../../../atomic/atoms/Card/Card";
import { FavoriteIconSelectedSVG } from "../../../atomic/atoms/Icons/FavoriteIconSelectedSVG";
import { TimeSVG } from "../../../atomic/atoms/Icons/TimeSVG";
import { EmptyBoxLottie } from "../../../atomic/atoms/Lotties/EmptyBoxLottie";

export const HomeFavoritesCards = () => {
  const [favoritePosts, setFavoritePosts] = useLocalStorageState(
    "favorite-posts",
    []
  );

  return (
    <div>
      {favoritePosts.length === 0 && <EmptyBoxLottie />}
      <div className="favorite-cards__wrapper">
        {favoritePosts?.map(
          ({ centralText, headerText, createdAt, storyUrl }: any) => {
            return (
              <Card
                headerIcon={<TimeSVG />}
                rightIcon={<FavoriteIconSelectedSVG />}
                clickHandler={() => {
                  setFavoritePosts(
                    favoritePosts.filter((post: any) => {
                      return post.createdAt !== createdAt;
                    })
                  );
                }}
                url={storyUrl}
                centralText={centralText}
                headerText={headerText}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
