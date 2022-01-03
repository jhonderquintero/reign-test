import { Card, ICard } from "../../../atomic/atoms/Card/Card";
import { FavoriteIconSelectedSVG } from "../../../atomic/atoms/Icons/FavoriteIconSelectedSVG";
import { FavoriteIconSVG } from "../../../atomic/atoms/Icons/FavoriteIconSVG";
import React, { useEffect, useState } from "react";
import { dropdownStates } from "atomic/organisms/HomeAllCards/HomeAllCards";

export const InfoCard: React.FC<IInfoCard> = ({
  localStorageSetter,
  prevLocalStorageState,
  centralText,
  headerText,
  storyUrl,
  id,
  query,
  selectedDropdown,
  createdAt,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    for (const post of prevLocalStorageState) {
      if (createdAt === post.createdAt) {
        setIsFavorite(true);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFavorite) {
      const arr = prevLocalStorageState.filter((post) => {
        return post.createdAt === createdAt && post.id === id;
      });

      if (arr.length === 0) {
        localStorageSetter([
          ...prevLocalStorageState,
          {
            id,
            query,
            createdAt,
            headerText,
            centralText,
            storyUrl,
          },
        ]);
      }
    }
    if (!isFavorite) {
      localStorageSetter(
        prevLocalStorageState.filter((post: any) => {
          return post.createdAt !== createdAt;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <Card
      {...props}
      rightIcon={isFavorite ? <FavoriteIconSelectedSVG /> : <FavoriteIconSVG />}
      clickHandler={handleClick}
      centralText={centralText}
      headerText={headerText}
      key={createdAt}
      url={storyUrl}
    />
  );
};

interface IInfoCard extends ICard {
  localStorageSetter: Function;
  prevLocalStorageState: any[];
  storyUrl: string;
  id: string;
  query: string;
  selectedDropdown: dropdownStates;
  createdAt: string;
}
