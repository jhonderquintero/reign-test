import { TimeSVG } from "../../../atomic/atoms/Icons/TimeSVG";
import { fetchPosts } from "../../../helpers/fetchPosts";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { reactQueryHOC } from "../../../helpers/reactQueryHOC";
import { InfoCard } from "../InfoCard/InfoCard";
import { useSearchParams } from "react-router-dom";
import "./styles.css";
import { Pagination } from "../Pagination/Pagination";
import formatDistance from "date-fns/formatDistance";
import { LoadingLottie } from "../../../atomic/atoms/Lotties/Loading";

export const SelectedCards = reactQueryHOC(
  ({ favoritePosts, setFavoritePosts, selectedDropdown, queryClient }: any) => {
    const [page, setPage] = React.useState<number>(0);
    const [isFetchingFirstTime, setIsFetchingFirstTime] = useState(true);

    const { status, data, isPreviousData, isFetching } = useQuery(
      ["posts", page],
      () => fetchPosts(page, selectedDropdown),
      { keepPreviousData: true, staleTime: 5000 }
    );

    useEffect(() => {
      if (isFetchingFirstTime) {
        if (!isFetching) {
          setIsFetchingFirstTime(false);
        }
      }
    }, [selectedDropdown, isFetching, isFetchingFirstTime]);

    useEffect(() => {
      setIsFetchingFirstTime(true);
    }, [selectedDropdown, page]);

    // When change page number, setIsFetchingFirstTime to true
    useEffect(() => {
      setIsFetchingFirstTime(true);
    }, [page]);

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
        {!isFetchingFirstTime && (
          <div>
            <div className="card__wrapper">
              {data.hits.map(
                ({
                  story_title,
                  story_url,
                  created_at,
                  story_id,
                  author,
                }: any) => {
                  if (!story_title || !story_url || !created_at || !author) {
                    return null;
                  } else {
                    const time = formatDistance(
                      new Date(Date.parse(created_at)),
                      new Date(),
                      { addSuffix: true }
                    );

                    return (
                      <InfoCard
                        createdAt={created_at}
                        prevLocalStorageState={favoritePosts}
                        headerText={`${time.replace("about", "")} by ${author}`}
                        centralText={story_title}
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
          </div>
        )}

        {(status === "loading" || isFetchingFirstTime === true) && (
          <LoadingLottie />
        )}

        {status === "error" && (
          <div>
            <p>Some error occurs</p>
          </div>
        )}

        <Pagination
          isPreviousData={isPreviousData}
          page={page}
          pageSetter={setPage}
          numberOfPages={data?.nbPages}
        />
      </div>
    );
  }
);
