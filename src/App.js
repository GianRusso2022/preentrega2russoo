
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { CategoryPage } from './pages/CategoryPage';
import { DetailPage } from "./pages/DetailPage"
import { UserLayout } from './components/UserLayout';
import { CheckoutPage } from './pages/CheckoutPage';
function App() {

  return (


    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path={"/category/:categoryId"} element={<CategoryPage />} />
            <Route path={"/product/:productId"} element={<DetailPage />} />
            <Route path={"/checkout"} element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
