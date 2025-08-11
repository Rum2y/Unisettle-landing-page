import NavBar from "./components/navBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/hero";
import Features from "./components/features";
import AppScreenshots from "./components/appScreenshots";
import PrivacyPolicy from "./components/privacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Support from "./components/support";
import CallToAction from "./components/callToAction";
import ScrollToTop from "./scrollToTop";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <Hero />
        <Features />
        <AppScreenshots />
        <CallToAction />
        <Footer />
      </>
    ),
  },
  {
    path: "/support",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <Support />
        <Footer />
      </>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <PrivacyPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "/terms-of-use",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <TermsOfUse />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
