import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import "./App.css"

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
    <div className="w-full min-h-screen bg-[#303030] flex flex-col font-inter">
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
      </div>
    </>
  );
}

export default App;
