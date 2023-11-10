import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import SlickCarousel from "./SlickCarousel.jsx";
import Content from "./Content.jsx";
import ScrollSpy from "react-ui-scrollspy";
import { useGlobalContext } from "./Context.jsx";

const App = () => {
  const { handleScroll } = useGlobalContext();
  return (
    <div className="app" onScroll={handleScroll()}>
      <Header />
      <Navbar />
      <ScrollSpy>
        <Home />
        <SlickCarousel />
        <Content />
      </ScrollSpy>
    </div>
  );
};

export default App;
