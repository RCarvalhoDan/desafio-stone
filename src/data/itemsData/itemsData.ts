// Buylist type
export interface IBuyList {
    item: string;
    quantity: number;
    price: number;
  }

export const listOfItems01: Array<IBuyList> = [];

export const listOfItems02: Array<IBuyList> = [
  {
    item: 'cookies',
    quantity: 1,
    price: 100,
  },
];

export const listOfItems03: Array<IBuyList> = [
  {
    item: 'cookies',
    quantity: 1,
    price: 100,
  },
  {
    item: 'smoothies',
    quantity: 5,
    price: 500,
  },
  {
    item: 'fries',
    quantity: 3,
    price: 1000,
  },
];
