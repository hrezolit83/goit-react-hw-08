import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import "./App.css";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/registerPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/loginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/contactsPage/CotactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
