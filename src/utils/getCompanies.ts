import { getCollection } from "astro:content";

export interface Company {
  readonly name: string;
  readonly services: string;
  readonly web: string | undefined;
  readonly linkedin: string | undefined;
}

export async function getCompanies(): Promise<ReadonlyArray<Company>> {
  const entries = await getCollection("companies");
  return entries
    .map((entry) => ({
      name: entry.data.nombre,
      services: entry.data.servicios,
      web: entry.data.web,
      linkedin: entry.data.linkedin,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}
