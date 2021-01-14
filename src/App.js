import React from 'react';
import data from './data';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");

  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }


  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
           <div className="brand">
               <button onClick={openMenu}>
                 &#9776;
               </button>
               <Link to="/">amazona</Link>
           </div>
           <div className="header-links">
               <a href="cart.html">Cart </a>
               <a href="signin.html">Sign in</a>
           </div>
        </header>
        <aside className="sidebar">
            <div className="content">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                </ul>
            </div>
        </aside>
        <main className="main">
        <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
           </div>
        </main>
        <footer className="footer">
            copyright @2021
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
