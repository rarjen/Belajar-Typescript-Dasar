export interface Seller {
  id: number;
  name: string;
  address?: string;

  //readonly properties
  readonly nib: string; //bisa dijadikan optional, namun tidak berguna krn biasanya wajib diisi
  readonly npwp: string;
}
