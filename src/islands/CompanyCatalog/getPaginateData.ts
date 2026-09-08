import type { Company } from "../../utils/parseCsv";

export function getPaginateData(
  data: readonly Company[],
  currentPage: number,
  perPage: number,
) {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  return data.slice(start, end);
}
