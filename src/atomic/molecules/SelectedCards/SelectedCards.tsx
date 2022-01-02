import { TimeSVG } from "../../../atomic/atoms/Icons/TimeSVG";
import { fetchPosts } from "../../../helpers/fetchPosts";
import React from "react";
import { useQuery } from "react-query";
import { reactQueryHOC } from "../../../helpers/reactQueryHOC";
import { InfoCard } from "../InfoCard/InfoCard";

export const SelectedCards = reactQueryHOC(
  ({ favoritePosts, setFavoritePosts, selectedDropdown, queryClient }: any) => {
    const [page, setPage] = React.useState(0);

    const { status, data, isPreviousData } = useQuery(
      ["posts", page],
      () => fetchPosts(page, selectedDropdown),
      { keepPreviousData: true, staleTime: 5000 }
    );

    // Prefetch the next page!
    React.useEffect(() => {
      queryClient.prefetchQuery(["posts", page], () =>
        fetchPosts(page, selectedDropdown)
      );
    }, [page, queryClient, selectedDropdown]);

    return (
      <div style={{ marginTop: 30 }}>
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
                      query={data.query}
                      selectedDropdown={selectedDropdown}
                    />
                  );
                }
              }
            )}
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
