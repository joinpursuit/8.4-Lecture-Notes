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


function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
      <Nav />
      <main>
        <Home />
        <About />
        <Newsletter />
        <ProductList products={lamps} type={'Lamps'}/>
        <ProductList products={candles} type={'Candles'}/>
      </main>
    </div>
    <Footer />
    </div>
  );
}

export default App;
