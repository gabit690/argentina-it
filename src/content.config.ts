import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";
import { parse } from "csv-parse/sync";
import { capitalizeFirst } from "./utils/capitalizeFirst";

const companySchema = z.object({
  nombre: z.string(),
  web: z.string().optional(),
  linkedin: z.string().optional(),
  especialidades: z.string(),
});

type CompanyDataCsv = z.infer<typeof companySchema>;

const companies = defineCollection({
  loader: file("src/data/empresas.csv", {
    parser: (text) => {
      const records = parse<CompanyDataCsv>(text, {
        columns: true,
        skip_empty_lines: true,
      });

      return records.map((record, index) => ({
        id: `company-${index}`,
        ...record,
        nombre: record.nombre.toUpperCase(),
        especialidades: capitalizeFirst(record.especialidades),
      }));
    },
  }),
  schema: companySchema,
});

export const collections = { companies };
