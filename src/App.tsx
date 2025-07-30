import NavBar from "./components/navBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/hero";
import Features from "./components/features";
import AppScreenshots from "./components/appScreenshots";
import PrivacyPolicy from "./components/privacyPolicy";
import Support from "./components/support";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
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
        <NavBar />
        <PrivacyPolicy />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
