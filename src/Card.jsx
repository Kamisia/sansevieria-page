import { BsSunFill } from "react-icons/bs";
import { GiPlantWatering, GiFertilizerBag } from "react-icons/gi";
const Card = () => {
  return (
    <div className="info-short">
      <article className="info-content">
        <div className="item-info">
          <h5>
            <span className="icon">
              <BsSunFill />
            </span>
            Light
          </h5>
          <p>full sun or half sun</p>
          <hr></hr>
          <h5>
            <span className="icon">
              <GiPlantWatering />
            </span>
            Water
          </h5>
          <p> once every 10-14 days</p>
          <hr></hr>
          <h5>
            <span className="icon">
              <GiFertilizerBag />
            </span>
            Fertilize
          </h5>
          <p> once every 3-4 weeks</p>
          <hr></hr>
        </div>
      </article>
    </div>
  );
};

export default Card;
