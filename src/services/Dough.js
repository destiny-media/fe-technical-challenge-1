import { data } from '../data/dough.json';

export const fetchDough = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 1600);
  });
}
