import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/product/Products";
import ProductForm from "./pages/product/ProductForm";
import UserForm from "./pages/users/UserForm";
import Navbar from "./components/Navbar";
import { Bounce, ToastContainer } from "react-toastify";
import { useStore } from "./hooks/useStore";
import ProductCards from "./pages/product/ProductCards";
import Carts from "./pages/users/Carts";

const App = () => {
  const { darkMode } = useStore("darkMode");

  return (
    <div className="min-h-screen bg-black/5 dark:bg-black/90 dark:text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/productcards" element={<ProductCards />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/users" element={<Users />}>
            <Route path="create" element={<UserForm />} />
            <Route path="edit/:id" element={<UserForm />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route path="create" element={<ProductForm />} />
            <Route path="edit/:id" element={<ProductForm />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
          transition={Bounce}
        />
      </Router>
    </div>
  );
};

export default App;
