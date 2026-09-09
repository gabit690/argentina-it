import { useMemo } from "preact/hooks";
import type { Pagination } from "../../interfaces/pagination";
import { getPagesNumbers } from "./pagination";
import "./paginator.css";

interface PaginatorProps extends Pagination {
  readonly dataLength: number;
  readonly onChangePage: (page: number) => void;
  readonly onChangePerPage: (perPage: number) => void;
}

export default function Paginator({
  dataLength,
  currentPage,
  perPage,
  onChangePage,
  onChangePerPage,
}: PaginatorProps) {
  const TOTAL_PAGES = Math.ceil(dataLength / perPage);

  const pagesNumbers = useMemo(
    () => getPagesNumbers(TOTAL_PAGES, currentPage),
    [dataLength, perPage, currentPage],
  );

  return (
    <div id="paginator-container">
      <div id="page-selector-container">
        <span
          onClick={() => onChangePage(currentPage - 1)}
          class={`movement-button ${currentPage == 1 ? "disabled-button" : ""}`}
        >{`<`}</span>
        {pagesNumbers.map((page) => (
          <span
            onClick={() => onChangePage(page)}
            class={`page-button ${
              page == currentPage
                ? "page-selected"
                : page == 0
                  ? "disabled-page"
                  : ""
            }`}
          >
            {page !== 0 ? page : "..."}
          </span>
        ))}
        <span
          onClick={() => onChangePage(currentPage + 1)}
          class={`movement-button ${currentPage == TOTAL_PAGES ? "disabled-button" : ""}`}
        >{`>`}</span>
      </div>
      <div id="show-per-page-container">
        <p>Mostrar: </p>
        <select
          id="perPage"
          onChange={(ev) => {
            const select = ev.currentTarget as HTMLSelectElement;
            onChangePerPage(Number(select.value));
          }}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <option key={index} value={10 * (index + 1)}>
              {10 * (index + 1)}
            </option>
          ))}
        </select>
        <p>por página</p>
      </div>
    </div>
  );
}
