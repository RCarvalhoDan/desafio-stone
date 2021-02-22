import { 
  listOfItems01, 
  listOfItems02, 
  listOfItems03 
} from '../data/itemsData/itemsData';
import { 
  emailsList01, 
  emailsList02, 
  emailsList03, 
  emailsList04, 
  emailsList05 
} from '../data/emailsData/emailsData';

import { totalBill } from '../index';

test('Empty email list', () => {
  expect(totalBill(listOfItems01, emailsList01)).toBe('Empty email list. There is no one to split the bill.');
});

test('Empty buylist', () => {
  expect(totalBill(listOfItems01, emailsList02)).toBe('Empty buylist. Order something.');
});

test('User email is key from dictionairy user: valueToPay', () => {
  const usersAmountToPay = totalBill(listOfItems02, emailsList02);
  expect(Object.keys(usersAmountToPay)).toStrictEqual(['user1@user.com']);
});

test('One item and one user', () => {
  expect(totalBill(listOfItems02, emailsList02)).toStrictEqual({ 'user1@user.com': 100 });
});

test('Not an exact division (i.e, remainder different than 0)', () => {
  expect(totalBill(listOfItems02, emailsList03))
    .toStrictEqual({ 
      'user1@user.com': 34, 
      'user2@user.com': 33, 
      'user3@user.com': 33
    });
});

test('Variable price and quantity per item', () => {
  expect(totalBill(listOfItems03, emailsList05))
    .toStrictEqual({ 
      'user1@user.com': 431,
      'user2@user.com': 431,
      'user3@user.com': 431,
      'user4@user.com': 431,
      'user5@user.com': 431,
      'user6@user.com': 431,
      'user7@user.com': 431,
      'user8@user.com': 431,
      'user9@user.com': 431,
      'user10@user.com': 431,
      'user11@user.com': 430,
      'user12@user.com': 430,
      'user13@user.com': 430
    });
});
