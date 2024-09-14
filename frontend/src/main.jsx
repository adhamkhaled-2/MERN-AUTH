import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import store from "../src/store.js";
import { Provider } from "react-redux";
import Profilescreen from "./screens/Profilescreen.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/* Private routes */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profilescreen />} />
      </Route>
    </Route>,
  ])
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
