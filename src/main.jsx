import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ComponentProvider from "./contexts/ComponentContext";
import { Provider } from "react-redux"; 
import { store } from "./app/store"; 
createRoot(document.getElementById("root")).render(
    <ComponentProvider>
          <Provider store={store}>
            <App />
          </Provider>
    </ComponentProvider>
);

