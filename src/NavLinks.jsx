import { useGlobalContext } from "./Context";
import { links } from "./data";
const NavLinks = () => {
  const { linksContainerRef, linkStyles, linksRef, screenWidth } =
    useGlobalContext();
  return (
    <div className="links-container" ref={linksContainerRef} style={linkStyles}>
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
  );
};

export default NavLinks;
