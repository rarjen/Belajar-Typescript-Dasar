export interface Employee {
  id: string;
  name: string;
  division?: string;
}

export interface Vacation {
  place?: string;
  duration?: number;
}

export interface Manager extends Employee, Vacation {
  numberOfEmployee: number;
}

export interface CEO extends Manager, Vacation {
  numberOfCompanies: number;
}
