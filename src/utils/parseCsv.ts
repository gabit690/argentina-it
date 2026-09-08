import path from "node:path";
import fs from "node:fs";
import { parse } from "csv-parse/sync";

interface CompanyDataCsv {
  nombre: string;
  web: string | null;
  linkedin: string | null;
  servicios: string;
}

export interface Company {
  readonly name: string;
  readonly services: string;
  readonly web: string | null;
  readonly linkedin: string | null;
}

export function getCompanies(): ReadonlyArray<Company> {
  const csvFilePath = path.resolve("src/data/empresas.csv");
  const rawData = fs.readFileSync(csvFilePath, "utf-8");
  const records: CompanyDataCsv[] = parse(rawData, {
    columns: true,
    skip_empty_lines: true,
  });
  return records.map((record) => ({
    name: record.nombre,
    services: record.servicios,
    web: record.web,
    linkedin: record.linkedin,
  }));
}
