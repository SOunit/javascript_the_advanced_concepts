type Item = {
  name: string;
  price: number;
};

type User = {
  name: string;
  active: boolean;
  cart: Item[];
  purchases: Item[];
  addItem: (item: Item) => void;
  buyItem: () => void;
  emptyCart: () => void;
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
  addItem(item: Item) {
    item.price = Math.floor(item.price * 1.03);
    this.cart.push(item);
  },
  buyItem() {
    this.purchases = [...this.purchases, ...this.cart];
    this.emptyCart();
  },
  emptyCart() {
    this.cart = [];
  },
};

const item: Item = { name: "test item", price: 100 };

// add item
user.addItem(item);
user.addItem(item);
user.addItem(item);
console.log(user);

// buy item
user.buyItem();
console.log(user);
