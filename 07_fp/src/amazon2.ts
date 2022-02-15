type Item = {
  name: string;
  price: number;
};

type User = {
  name: string;
  active: boolean;
  cart: Item[];
  purchases: Item[];
};

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// Amazon shopping
const user: User = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const amazonHistory = [];

// library has compose, so you don't have to define compose by yourself
const compose =
  (f: Function, g: Function) =>
  (...args: any[]) =>
    f(g(...args));

let result: any = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: "laptop", price: 200 });

console.log(result);

function purchaseItem(...fns: Function[]) {
  return fns.reduce(compose);
}

function addItemToCart(user: User, item: Item) {
  amazonHistory.push(user);

  const updateCard = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCard });
}

function applyTaxToItems(user: User) {
  amazonHistory.push(user);

  const { cart } = user;
  const taxRate = 1.03;
  const updatedCard = cart.map((item) => {
    return { name: item.name, price: item.price * taxRate };
  });
  return Object.assign({}, user, { cart: updatedCard });
}

function buyItem(user: User) {
  amazonHistory.push(user);

  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user: User) {
  amazonHistory.push(user);

  return Object.assign({}, user, { cart: [] });
}

console.log(amazonHistory);

function refundItem() {}
