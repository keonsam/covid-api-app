export type CreateCountryDTO = {
  name: string;
  population: number;
  area: number;
};

export type Country = {
  id: number;
  name: string;
  population: number;
  area: number;
  created_at: string;
  updated_at: string;
};
