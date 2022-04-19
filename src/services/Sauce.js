import { data } from '../data/sauces.json';

export const fetchSauce = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 800);
  })
}
