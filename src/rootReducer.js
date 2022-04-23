import { combineReducers } from 'redux'
import { reducer as Dough } from './containers/Dough'
import { reducer as Sauces } from './containers/Sauces'
import { reducer as Toppings } from './containers/Toppings'
import { reducer as Checkout } from './containers/Checkout'


export default combineReducers({
  Dough,
  Sauces,
  Toppings,
  Checkout,
})