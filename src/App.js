import React  from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import './App.css';


import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component'
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
