import { Card, ICard } from "../../../atomic/atoms/Card/Card";
import { FavoriteIconSelectedSVG } from "../../../atomic/atoms/Icons/FavoriteIconSelectedSVG";
import { FavoriteIconSVG } from "../../../atomic/atoms/Icons/FavoriteIconSVG";
import React, { useEffect, useState } from "react";

export const InfoCard: React.FC<IInfoCard> = ({
  localStorageSetter,
  prevLocalStorageState,
  centralText,
  headerText,
  storyUrl,
  id,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    for (const post of prevLocalStorageState) {
      if (post.id === id) {
        setIsFavorite(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFavorite) {
      localStorageSetter([
        ...prevLocalStorageState,
        {
          centralText,
          headerText,
          storyUrl,
          id,
        },
      ]);
    }
    if (!isFavorite) {
      localStorageSetter(
        prevLocalStorageState.filter((post: any) => {
          return post.id !== id;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centralText, headerText, isFavorite, localStorageSetter, storyUrl]);

  return (
    <Card
      {...props}
      rightIcon={isFavorite ? <FavoriteIconSelectedSVG /> : <FavoriteIconSVG />}
      clickHandler={handleClick}
      centralText={centralText}
      headerText={headerText}
    />
  );
};

interface IInfoCard extends ICard {
  localStorageSetter: Function;
  prevLocalStorageState: any[];
  storyUrl: string;
  id: string;
}
