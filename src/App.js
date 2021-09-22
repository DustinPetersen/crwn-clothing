import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import './App.css';


import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component'
import Header from './components/header/header.component';
import {
  auth,
  createUserProfileDoocument
} from './firebase/firebase.utils';


class App extends React.Component {
    constructor() {
      super();

      this.state = {
        currentUser: null
      }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
      this.unsubscribeFromauth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDoocument(userAuth);

            userRef.onSnapshot(snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              });
            });
          }
            this.setState({ currentUser: userAuth });
          });
      }

      componentWillUnmount() {
        this.unsubscribeFromauth();
      }


      render() {
        return ( <
          div >
          <
          BrowserRouter >
          <
          Header currentUser = {
            this.state.currentUser
          }
          />

          <
          Switch >
          <
          Route exact path = '/'
          component = {
            HomePage
          }
          /> <
          Route path = '/shop'
          component = {
            ShopPage
          }
          /> <
          Route path = '/signin'
          component = {
            SignInAndSignUpPage
          }
          /> <
          /Switch> <
          /BrowserRouter> <
          /div>
        );
      }

    }

    export default App;
