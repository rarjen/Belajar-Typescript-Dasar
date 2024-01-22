//Union Typealias
export type ID = string | number;

export type CategoryOptional = {
  id: ID; //Union Typealias
  name: string;
  description?: string;
};

export type ProductOptional = {
  id: ID; //Union Typealias
  name: string;
  price: number;
  category: CategoryOptional;
  descriotion?: string;
};
