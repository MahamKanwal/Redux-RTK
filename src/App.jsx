import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/product/Products";
import ProductForm from "./pages/product/ProductForm";
import UserForm from "./pages/users/UserForm";
import Navbar from "./components/Navbar";
import { productActions } from "./features/product/productSlice";
import { userActions } from "./features/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(productActions.fetchItems());
     dispatch(userActions.fetchItems());
  }, []);

    return (
    <div className="min-h-screen bg-black/10 dark:bg-black/90 dark:text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />}>
            <Route path="create" element={<UserForm />} />
            <Route path="edit/:id" element={<UserForm />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route path="create" element={<ProductForm />} />
            <Route path="edit/:id" element={<ProductForm />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
