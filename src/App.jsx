import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Search } from "./pages/Search";
import { RootLayout } from "./layout/RootLayout";
import { Queery } from "./pages/Queery";
import { AddProductPage } from "./pages/add-product";
import { UpdateProductPage } from "./pages/update-product";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="update-product" element={<UpdateProductPage />} />
        </Route>
        {/* <Route path="querry" element={<Queery />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
