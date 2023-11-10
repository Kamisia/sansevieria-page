import { useContext, createContext, useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /*SlickCarousel*/
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  /*Navbar*/
  function getWindowDimensions() {
    const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
    return {
      screenWidth,
      screenHeight,
    };
  }
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };
  const { screenWidth, screenHeight } = useWindowDimensions();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  /*Scroll */

  const [scrollPosition, setScrollPosition] = useState();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        settings,
        toggleLinks,
        linkStyles,
        linksContainerRef,
        linksRef,
        screenWidth,
        screenHeight,
        handleScroll,
        scrollPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
