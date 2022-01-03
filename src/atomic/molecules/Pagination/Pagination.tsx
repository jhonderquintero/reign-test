import { PaginationButton } from "../../../atomic/atoms/PaginationButton/PaginationButton";
import React, { useEffect, useRef } from "react";
import "./styles.css";

export const Pagination: React.FC<IPagination> = ({
  pageSetter,
  page,
  isPreviousData,
  numberOfPages,
}) => {
  const pagesArr: React.MutableRefObject<number[]> = useRef([]);
  const hasMorePages: React.MutableRefObject<boolean> = useRef(
    pagesArr.current.length > 0
  );

  useEffect(() => {
    if (numberOfPages) {
      for (let index = page; index < numberOfPages; index++) {
        if (pagesArr.current.length < 9) {
          pagesArr.current.push(index);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pagination-wrapper">
      <PaginationButton
        onClick={() => {
          pageSetter((old) => Math.max(old - 1, 0));
          pagesArr.current.pop();
          pagesArr.current.unshift(pagesArr.current[0] - 1);
        }}
        disabled={page === 0 || pagesArr.current[0] === 0}
      >
        {"<"}
      </PaginationButton>
      {hasMorePages
        ? pagesArr.current.map((actPage: number) => {
            return (
              <PaginationButton
                key={actPage}
                onClick={() => {
                  pageSetter(actPage);
                  console.log(pagesArr.current);
                }}
                style={{
                  backgroundColor: `${actPage === page ? "#1890ff" : "#fff"}`,
                  color: `${actPage === page ? "#fff" : "black"}`,
                }}
              >
                {actPage + 1}
              </PaginationButton>
            );
          })
        : null}

      <PaginationButton
        onClick={() => {
          pagesArr.current.shift();
          pagesArr.current.push(
            pagesArr.current[pagesArr.current.length - 1] + 1
          );
          pageSetter(page + 1);
        }}
        disabled={isPreviousData}
      >
        {">"}
      </PaginationButton>
    </div>
  );
};

interface IPagination {
  page: number;
  pageSetter: React.Dispatch<React.SetStateAction<number>>;
  isPreviousData?: boolean;
  numberOfPages?: number;
}
