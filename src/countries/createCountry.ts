import { Country, CreateCountryDTO } from "../types/country";
import db from "../db/knex";

export default async function createCountry(
  countryData?: CreateCountryDTO
): Promise<Country> {
  const values: Country[] = await db("countries")
    .insert(countryData)
    .returning("*");
  return values[0];
}
