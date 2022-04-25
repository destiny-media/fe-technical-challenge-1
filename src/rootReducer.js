import { combineReducers } from 'redux'
import { reducer as Dough } from './containers/Dough'
import { reducer as Sauces } from './containers/Sauces'
import { reducer as Toppings } from './containers/Toppings'
import { reducer as Checkout } from './containers/Checkout'


const appReducer = combineReducers({
  Dough,
  Sauces,
  Toppings,
  Checkout,
})


const rootReducer = (state, action) => {
  if (action.type === 'Checkout/reset') {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;
