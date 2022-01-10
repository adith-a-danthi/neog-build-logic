// Q4
// Given an array of objects of items in cart, print:
const cartData = [
  {
    id: "101",
    name: "Oreo",
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: "102",
    name: "Red Bull",
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: "104",
    name: "Pulse Candy Pack",
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

// The total No. of items
const getTotalItems = (cartItems) => cartItems.length;
console.log(getTotalItems(cartData));

// The total cart value
const getTotalCartValue = (cartItems) =>
  cartItems.reduce(
    (acc, item) => acc + item.price * item.count * (1 - item.discount),
    0
  );
console.log(getTotalCartValue(cartData));

// The total discounted value(sum of dicounted values on each item) based on the given discount
const getTotalDiscountedValue = (cartItems) =>
  cartItems.reduce(
    (acc, item) => acc + item.price * item.count * item.discount,
    0
  );
console.log(getTotalDiscountedValue(cartData));

// Total tax amount (18% tax, calculated on total cart value)
const getTotalTaxAmount = (cartItems) => getTotalCartValue(cartItems) * 0.18;
console.log(getTotalTaxAmount(cartData));
