import { TimeSVG } from "../../../atomic/atoms/Icons/TimeSVG";
import { fetchPosts } from "../../../helpers/fetchPosts";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { reactQueryHOC } from "../../../helpers/reactQueryHOC";
import { InfoCard } from "../InfoCard/InfoCard";
import { useSearchParams } from "react-router-dom";
import "./styles.css";

export const SelectedCards = reactQueryHOC(
  ({ favoritePosts, setFavoritePosts, selectedDropdown, queryClient }: any) => {
    const [page, setPage] = React.useState(0);

    const { status, data, isPreviousData } = useQuery(
      ["posts", page],
      () => fetchPosts(page, selectedDropdown),
      { keepPreviousData: true, staleTime: 5000 }
    );

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      searchParams.set("query", selectedDropdown);
      setSearchParams(searchParams);
    }, [selectedDropdown, searchParams, setSearchParams]);

    // Prefetch the next page!
    React.useEffect(() => {
      searchParams.set("page", String(page + 1));
      setSearchParams(searchParams);
      queryClient.prefetchQuery(["posts", page], () =>
        fetchPosts(page, selectedDropdown)
      );
    }, [page, queryClient, searchParams, selectedDropdown, setSearchParams]);

    return (
      <div style={{ marginTop: 30 }}>
        {status === "success" && (
          <div>
            <div className="card__wrapper">
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
                        createdAt={created_at}
                        prevLocalStorageState={favoritePosts}
                        headerText={story_title}
                        centralText={comment_text}
                        headerIcon={<TimeSVG />}
                        storyUrl={story_url}
                        localStorageSetter={setFavoritePosts}
                        id={story_id}
                        query={data.query}
                        selectedDropdown={selectedDropdown}
                        key={created_at}
                      />
                    );
                  }
                }
              )}
            </div>
            <div>
              <div>Current Page: {page + 1}</div>
              <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 0}
              >
                Previous Page
              </button>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                disabled={isPreviousData}
              >
                Next Page
              </button>
            </div>
          </div>
        )}

        {status === "loading" && (
          <div>
            <p>Loading...</p>
          </div>
        )}

        {status === "error" && (
          <div>
            <p>Some error occurs</p>
          </div>
        )}
      </div>
    );
  }
);
