import { IBuyList } from './data/itemsData/itemsData';

// Dictionary type
interface IPersonDue {
  [key: string]: number;
}

// Calculate the amount that each person have to pay
const amountToPay = (itemsAmount: number, emailListSize: number): number[] => {
  let amount: Array<number> = [] // each position in the array will be assigned to one person

  // If each person will pay the same amount, the amount[] will have length equal 1
  // this way we don't need to alocate uneccesary memory
  if(itemsAmount%emailListSize === 0){
    amount.push(itemsAmount/emailListSize);
    return amount;
  }

  // Some people will pay a different amount
  const peopleThatWillPayMore = itemsAmount%emailListSize;
  const integerItemsAmount = Math.floor(itemsAmount/emailListSize); // round decimal value down
  let distribution = peopleThatWillPayMore;

  // distribute the remaining amount to each person
  for(let i = 0; i < emailListSize; i++){
    if(distribution > 0) {
      amount.push(integerItemsAmount + 1);
    } else {
      amount.push(integerItemsAmount);
    }

    distribution = distribution - 1;
  }

  return amount;
};

export const totalBill = (buyList: Array<IBuyList>, emailList: Array<string>): (IPersonDue | string) => {
  if(emailList.length === 0) {
    return 'Empty email list. There is no one to split the bill.';
  }

  if(buyList.length === 0){
    return 'Empty buylist. Order something.';
  }

  // Calculate the total value of the list
  const totalItemsValue: number = buyList.reduce((accumulator, currentValue) => (
    accumulator + (currentValue.price * currentValue.quantity)
  ), 0);

  const amountPerPerson = amountToPay(totalItemsValue, emailList.length);

  // Return a dictionary with an email as key and the amount for each person as the value
  let amountPerPersonDict: IPersonDue = {};

  emailList.forEach((person, index, emailList) => {
    amountPerPersonDict[person] = amountPerPerson.length === 1 ? 
                                        amountPerPerson[0] :
                                        amountPerPerson[index];
  });

  return amountPerPersonDict;
};
