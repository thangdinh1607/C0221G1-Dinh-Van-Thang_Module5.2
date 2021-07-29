export interface Contract {
  id?: number;
  employee?: number;
  customer?: number;
  service?: number;
  contractStartDate: string;
  contractEndDate: string;
  depositMoney: number;
  price?: number;
}
