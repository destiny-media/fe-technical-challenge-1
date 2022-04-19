import { data } from '../data/toppings.json';

export const fetchToppings = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 1000);
  })
};
