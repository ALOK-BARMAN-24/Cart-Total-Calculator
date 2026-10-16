// Cart Total Calculator

const cartItems = [
    { name: 'Book', price: 100, quantity: 2 },
    { name: 'Iphone', price: 200, quantity: 1 },
    { name: 'Bag', price: 500, quantity: 2 }
];

// function to calculate subtotal of items
function subTotal(items) {
    let sub_total = 0;
    for (const item of items) {
        sub_total += item.price * item.quantity;
    }
    return sub_total;
}

// function to calculate discount
function calculateDiscount(sub_Total, discount) {
    return (sub_Total * discount) / 100;
}

// function to calculate tax
function calculateTax(amountAfterDiscount, taxPercent) {
    return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = subTotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const amountAfterDiscount = subtotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    const total = amountAfterDiscount + tax;

    return {subtotal, discount, tax, total};
}

console.log(createCartSummary(cartItems, 10, 10));

