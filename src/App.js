import { Container } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import CategoryPage from './components/CategoryPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import SearchPage from './components/SearchPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <PrimarySearchAppBar />
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            {/* categories */}
            <Route exact path='/categories' element={<CategoriesPage />} />
            <Route exact path='/categories/:category' element={<CategoryPage />} />
            {/* product details */}
            <Route exact path='/products/:productId' element={<ProductDetailsPage />} />
            {/* search */}
            <Route exact path='/search' element={<SearchPage />} />
            {/* cart */}
            <Route exact path='/cart' element={<CartPage />} />
            {/* checkout */}
            <Route exact path='/checkout' element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes></Container>

      </Router>
    </>
  );
}

export default App;
