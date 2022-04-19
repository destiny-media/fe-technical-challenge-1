export const processOrder = data => new Promise(resolve => {
  setTimeout(() => resolve({ status: 200 }), 300);
});
