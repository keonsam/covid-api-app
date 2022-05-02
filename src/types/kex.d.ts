import { Knex } from "knex";
import { Country } from "./country";

declare module "knex/types/tables" {
  interface Tables {
    countries_composite: Knex.CompositeTableType<
      Country,
      Omit<Country, "id" | "created_at" | "updated_at">,
      Partial<Omit<Country, "id" | "created_at" | "updated_at">>
    >;
  }
}
