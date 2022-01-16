const Main = (props) => {
  return (
    <section className="travel-holder">
      <figure className="image-holder">
        <a href={props.imageLink} target="_blank" rel="noreferrer">
          <img
            src={"../images/" + props.image}
            alt={props.altAndTitle}
            className="travel-image"
          />
        </a>
      </figure>
      <ul className="travel-info">
        <li className="first-info">
          <i className="fas fa-map-marker-alt"></i>
          <span className="country-name">{props.countryName}</span>
          <a
            href={props.hrefMapLInk}
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            View on Google Maps
          </a>
        </li>
        <li className="second-info">
          <h1 className="location-name">{props.altAndTitle}</h1>
        </li>
        <li className="third-info">
          <p className="date-range">
            {props.startDate} - {props.endDate}
          </p>
        </li>
        <li>
          <p className="location-para">{props.paragraph}</p>
        </li>
      </ul>
    </section>
  );
};
export default Main;
