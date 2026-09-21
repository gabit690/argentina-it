import type { Pagination } from "../../interfaces/pagination";

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

  return (
    <div id="paginator-container">
      <div id="page-selector-container">
        <button
          onClick={() => onChangePage(currentPage - 1)}
          class={`movement-button ${currentPage === 1 ? "disabled-button" : ""}`}
        >
          {`< anterior`}
        </button>

        <select
          onChange={(ev) => {
            const select = ev.currentTarget as HTMLSelectElement;
            onChangePage(Number(select.value));
            ev.currentTarget.blur();
          }}
          class="selector-button"
        >
          {Array.from({ length: TOTAL_PAGES }, (_, index) => (
            <option
              key={index}
              value={index + 1}
              selected={index + 1 === currentPage}
            >
              {index + 1}
            </option>
          ))}
        </select>

        <button
          onClick={() => onChangePage(currentPage + 1)}
          class={`movement-button ${currentPage === TOTAL_PAGES ? "disabled-button" : ""}`}
        >
          {`siguiente >`}
        </button>
      </div>
      <div id="show-per-page-container">
        <p>Mostrar: </p>
        <select
          onChange={(ev) => {
            const select = ev.currentTarget as HTMLSelectElement;
            onChangePerPage(Number(select.value));
            ev.currentTarget.blur();
          }}
          class="selector-button"
        >
          {Array.from({ length: 3 }, (_, index) => (
            <option
              key={index}
              value={10 * (index + 1)}
              selected={10 * (index + 1) === perPage}
            >
              {10 * (index + 1)}
            </option>
          ))}
        </select>
        <p>por página</p>
      </div>
    </div>
  );
}
