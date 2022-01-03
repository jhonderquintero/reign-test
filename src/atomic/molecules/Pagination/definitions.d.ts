export interface IPagination {
  page: number;
  pageSetter: React.Dispatch<React.SetStateAction<number>>;
  isPreviousData?: boolean;
  numberOfPages?: number;
}
