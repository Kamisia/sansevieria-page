import { FaBars } from "react-icons/fa";

import { useGlobalContext } from "./Context";
import { links } from "./data";
const Navbar = () => {
  const {
    screenWidth,
    toggleLinks,
    scrollPosition,
    linksContainerRef,
    linkStyles,
    linksRef,
  } = useGlobalContext();
  if (screenWidth > 768) {
    return (
      <nav className={scrollPosition > 125 ? "onTop" : ""}>
        <div className="nav-center ">
          <div className="navbar">
            <div className="links-container">
              <ul className="links">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={scrollPosition > 175 ? "onTop" : ""}>
        <div className="nav-center ">
          <div className="navbar">
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
            <div
              className="links-container"
              ref={linksContainerRef}
              style={linkStyles}
            >
              <ul className="links" ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
