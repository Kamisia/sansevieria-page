import Card from "./Card.jsx";
const Content = () => {
  return (
    <section className="content" id="cultivation">
      <h1 className="title">Sansevieria cultivation </h1>
      <Card />

      <p>
        Although Sansevieria is often referred to as the 'iron plant,' it still
        has its own needs that we should at least try to meet. Don't worry; it's
        not difficult. The most important thing to remember is not to overwater
        this plant. Excess water is the one thing Sansevieria can't tolerate.
        You should only water it when the soil has completely dried out, usually
        every 10-14 days.
        <br /> Place the plant in a location with partial shade or bright,
        indirect light. Fertilize the plant with liquid fertilizer once every
        3-4 weeks, which, in practice, means adding fertilizer to water every
        other time you water, following the manufacturer's recommendations. Any
        fertilizer for green plants will work.
      </p>
    </section>
  );
};

export default Content;
