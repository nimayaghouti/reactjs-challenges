import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SliderPage from "./pages/SliderPage";
import TablePage, { todoLoader } from "./pages/TablePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route
          path="/table-pagination"
          element={<TablePage />}
          loader={todoLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
