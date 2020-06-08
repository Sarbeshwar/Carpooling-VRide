import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmbeddedVideo from './components/EmbeddedVideo';
import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Share from './components/Share';
import Footer from './components/Footer';
import Team from './components/Team';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/">
          <Header />
          <EmbeddedVideo />
        </Route>
        <Route exact path="/Signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="/Share">
          <Share></Share>
        </Route>
        <Route exact path="/Team">
          <Team></Team>
        </Route>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
