import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import type { Company } from "../../utils/parseCsv";
import type { Pagination } from "../interfaces/pagination";
import Paginator from "./Paginator/Paginator";
import CardsView from "./CardsView/CardsView";
import { getPaginateData } from "./getPaginateData";
import "./catalog.css";
import TableView from "./TableView/TableView";

interface CompanyCatalogProps {
  data: readonly Company[];
}

const INITIAL_PAGINATION: Pagination = {
  currentPage: 1,
  perPage: 10,
};

export default function CompanyCatalog({ data }: CompanyCatalogProps) {
  const [pagination, setPagination] = useState<Pagination>(INITIAL_PAGINATION);
  const isFirstRender = useRef(true);

  const TOTAL_PAGES = Math.ceil(data.length / pagination.perPage);

  const handleChangePage = useCallback(
    (nextPage: number) => {
      if (nextPage < 1 || nextPage > TOTAL_PAGES) return;
      setPagination((prevState) => ({
        ...prevState,
        currentPage: nextPage,
      }));
    },
    [TOTAL_PAGES],
  );

  const handleChangePerPage = useCallback((nextPerPage: number) => {
    setPagination({
      currentPage: 1,
      perPage: nextPerPage,
    });
  }, []);

  const paginateData = getPaginateData(
    data,
    pagination.currentPage,
    pagination.perPage,
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.getElementById("catalog-container")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [pagination.currentPage, pagination.perPage]);

  return (
    <div id="catalog-container">
      <TableView data={paginateData} />
      <CardsView data={paginateData} />
      <Paginator
        dataLength={data.length}
        currentPage={pagination.currentPage}
        perPage={pagination.perPage}
        onChangePage={handleChangePage}
        onChangePerPage={handleChangePerPage}
      />
    </div>
  );
}
