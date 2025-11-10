import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";
import ProductProvider from "./contexts/ProductContext";
import ComponentProvider from "./contexts/ComponentContext";
import { Provider } from "react-redux"; 
import { store } from "./app/store"; 
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ComponentProvider>
      <UserProvider>
        <ProductProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ProductProvider>
      </UserProvider>
    </ComponentProvider>
  </ThemeProvider>
);
