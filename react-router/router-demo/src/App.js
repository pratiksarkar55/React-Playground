import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeatureProducts from "./components/FeatureProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  const [locale, setLocale] = useState(i18n.language);
  console.log("locale", locale);
  console.log("i18n", i18n);
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  i18n.on("languageChanged", (lng) => {
    setLocale(i18n.language);
  });
  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <div>
          <label>Select Language</label>
          <select value={locale} onChange={handleChange}>
            <option value={"en"}>EN</option>
            <option value={"FR"}>FR</option>
          </select>
        </div>
        <Navbar />
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <React.Suspense>
                {" "}
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeatureProducts />} />
            <Route path="featured" element={<FeatureProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
