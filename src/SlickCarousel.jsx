import { sans } from "./data";
import Slider from "react-slick";
import { useGlobalContext } from "./Context.jsx";
const SlickCarousel = () => {
  const { settings } = useGlobalContext();
  return (
    <section className="slick-container" id="varieties">
      <h1 className="title"> Sansevieria varieties</h1>
      <Slider {...settings}>
        {sans.map((item) => {
          const { id, img, name } = item;
          return (
            <article key={id}>
              <img src={img} alt={name} className="sans-img" />
              <h5 className="name">{name}</h5>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
