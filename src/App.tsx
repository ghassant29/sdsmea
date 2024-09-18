import { useRoutes } from "react-router-dom";
import HomepageProvider from "./context/providers/homepage.provider";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProductsCategoryDetailPage from "./pages/ProductsCategoryDetailPage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import AllProducts from "./pages/ProductsPage";
import Routes from "./routes";

function App() {
  return useRoutes([
    {
      path: Routes.HOME,
      element: (
        <HomepageProvider>
          <Homepage />
        </HomepageProvider>
      )
    },
    {
      path: Routes.PRODUCT_DETAIL,
      element: <ProductPage />
    },
    {
      path: Routes.PRODUCTS,
      element: <AllProducts />
    },
    {
      path: Routes.CONTACT,
      element: <ContactPage />
    },
    {
      path: Routes.CATEGORY,
      element: <CategoryPage />
    },
    {
      path: Routes.PRODUCTS_CATEGORY,
      element: <ProductsCategoryPage />
    },
    {
      path: Routes.PRODUCTS_CATEGORY_DETAIL,
      element: <ProductsCategoryDetailPage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ]);
}

export default App;
