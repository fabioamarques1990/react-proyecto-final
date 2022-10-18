import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Provider from './components/context/Context';
import CartList from './components/header/CartList';
import Checkout from './components/header/Checkout';
import Index from './components/Index';
import Footer from './Footer';


function App() {

  return (
    <div>
      <Provider>
        <BrowserRouter>
            <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/category/:activity" element={<ItemListContainer />} />
            <Route exact path="/category" element={<ItemListContainer />} />
            <Route exact path="/category/activity/:id" element={<ItemDetailContainer />} />
            <Route path={"/carrito"} element={<CartList />} />
            <Route path={"/checkout"} element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
