import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./redux/store/index";
import App from "./App";

import FilterProvider from "./components/Routines/FiltersContex";
import FilterShopProvider from "./components/Shop/FiltersShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-whzziz8z5264izvj.us.auth0.com"
      clientId="1Cumcs4UOcjpGYzsin8CpBNfxLgM9gnN"
      redirectUri={window.location.origin}
    >
      <FilterProvider>
        <FilterShopProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </FilterShopProvider>
      </FilterProvider>
    </Auth0Provider>
  </React.StrictMode>
);
