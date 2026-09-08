export const getPagesNumbers = (
  lastPage: number,
  currentPage: number,
): number[] => {
  let pagesNumbers: number[] = [];

  if (lastPage <= 7) {
    pagesNumbers = Array.from({ length: lastPage }, (_, index) => index + 1);
  } else if (currentPage <= 3) {
    pagesNumbers = [1, 2, 3, 0, lastPage - 1, lastPage];
  } else if (currentPage <= lastPage - 3) {
    pagesNumbers = [1, 2, 0, currentPage, 0, lastPage - 1, lastPage];
  } else if (currentPage >= lastPage - 2) {
    pagesNumbers = [1, 2, 0, lastPage - 2, lastPage - 1, lastPage];
  }

  return pagesNumbers;
};
