//Union Typealias
export type ID = string | number;

export type Category = {
  id: ID; //Union Typealias
  name: string;
};

export type Product = {
  id: ID; //Union Typealias
  name: string;
  price: number;
  category: Category;
};
