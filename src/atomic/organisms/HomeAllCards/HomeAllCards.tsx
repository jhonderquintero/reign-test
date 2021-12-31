import { DropdownMenu } from "../../../atomic/molecules/DropdownMenu/DropdownMenu";
import { TimeSVG } from "../../../atomic/atoms/Icons/TimeSVG";
import "./styles.css";
import { useQuery } from "react-query";
import React, { useEffect } from "react";
import { reactQueryHOC } from "../../../helpers/reactQueryHOC";
import { InfoCard } from "../../molecules/InfoCard/InfoCard";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";

const fetchApiData = async () => {
  const res = await fetch(
    "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0"
  );
  return res.json();
};

export const HomeAllCards: React.FC = reactQueryHOC((): JSX.Element => {
  const { data, status } = useQuery("data", fetchApiData);
  const [favoritePosts, setFavoritePosts] = useLocalStorageState(
    "favorite-posts",
    []
  );

  return (
    <div className="wrapper">
      <DropdownMenu />
      <div style={{ marginTop: 30 }}>
        {status === "error" && (
          <div>
            <p>Some error occurs</p>
          </div>
        )}

        {status === "success" && (
          <div>
            {data.hits.map(
              ({
                story_title,
                story_url,
                created_at,
                comment_text,
                story_id,
              }: any) => {
                if (
                  !story_title ||
                  !story_url ||
                  !created_at ||
                  !comment_text
                ) {
                  return null;
                } else {
                  return (
                    <InfoCard
                      prevLocalStorageState={favoritePosts}
                      headerText={story_title}
                      centralText={comment_text}
                      headerIcon={<TimeSVG />}
                      storyUrl={story_url}
                      localStorageSetter={setFavoritePosts}
                      id={story_id}
                    />
                  );
                }
              }
            )}
          </div>
        )}

        {status === "loading" && (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
});
