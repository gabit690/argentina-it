import { getCollection } from "astro:content";

export interface Company {
  readonly name: string;
  readonly specialties: string;
  readonly web: string | undefined;
  readonly linkedin: string | undefined;
}

export async function getCompanies(): Promise<ReadonlyArray<Company>> {
  const entries = await getCollection("companies");
  return entries
    .map((entry) => ({
      name: entry.data.nombre,
      specialties: entry.data.especialidades,
      web: entry.data.web,
      linkedin: entry.data.linkedin,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}
