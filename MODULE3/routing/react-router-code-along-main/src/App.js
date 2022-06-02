import Footer from './components/common/footer.js'
import Header from './components/common/header'
import Nav from './components/common/nav'
import About from './components/pages/about'
import Home from './components/pages/home'
import Newsletter from './components/pages/newsletter'
import ProductList from './components/products/productList'
import Product from './components/products/product'

import lamps from './data/lamps.json'
import candles from './data/candles.json'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/lamps" element={<ProductList products={lamps} type={'Lamps'} />} />
              <Route path="/candles" element={<ProductList products={candles} type={'Candles'} />} />
              <Route
                path="/lamps/:id"
                element={<Product products={lamps} type={"Lamps"} />}
              />
              <Route
                path="/candles/:id"
                element={<Product products={candles} type={"Candles"} />}
              />
            </ Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
