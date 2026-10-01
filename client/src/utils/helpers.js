export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const calculateCartTotals = (cartItems, discountPercent = 0, deliveryFee = 5.00) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount + (subtotal > 0 ? deliveryFee : 0);

  return {
    subtotal: subtotal.toFixed(2),
    discount: discount.toFixed(2),
    deliveryFee: subtotal > 0 ? deliveryFee.toFixed(2) : '0.00',
    total: total.toFixed(2)
  };
};

export const truncateText = (str, maxLength = 80) => {
  if (!str) return '';
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};