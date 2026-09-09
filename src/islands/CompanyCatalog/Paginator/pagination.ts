export const getPagesNumbers = (
  lastPage: number,
  currentPage: number,
): number[] => {
  let pagesNumbers: number[] = [];

  if (lastPage <= 5) {
    pagesNumbers = Array.from({ length: lastPage }, (_, index) => index + 1);
  } else if (currentPage <= 2) {
    pagesNumbers = [1, 2, 0, lastPage];
  } else if (currentPage <= lastPage - 2) {
    pagesNumbers = [1, 0, currentPage, 0, lastPage];
  } else if (currentPage >= lastPage - 1) {
    pagesNumbers = [1, 0, lastPage - 1, lastPage];
  }

  return pagesNumbers;
};
