import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import FloatingElements from "./components/FloatingElements";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PatientsPage from "./pages/PatientsPage";
import ShopPage from "./pages/ShopPage";
import StaffPage from "./pages/StaffPage";

function AppLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <FloatingElements />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-staff" element={<StaffPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
