import React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './store'
import Home from './components/Home'
import Steps from './components/Steps'
import Dough from './containers/Dough'
import Sauces from './containers/Sauces'
import Toppings from './containers/Toppings'
import Checkout from './containers/Checkout'
import ThankYou from './components/ThankYou'
import NotFound from './components/NotFound'

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: 'Montserrat', sans-serif;
  }
`

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <Route path="/:currentPage(Dough|Sauce|Toppings|Checkout)" component={Steps} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Dough" component={Dough} />
        <Route path="/Sauce" component={Sauces} />
        <Route path="/Toppings" component={Toppings} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/ThankYou" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export default App
