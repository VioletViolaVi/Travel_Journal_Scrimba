const Main = (props) => {
  return (
    <main>
      <section>
        <figure>
          <a href={props.imageLink} target="_blank" rel="noreferrer">
            <img
              src={"../images/" + props.image}
              alt={props.altAndTitle}
              className="travel-image"
            />
          </a>
        </figure>
        <ul className="travel-info">
          <li>
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
          <li>
            <h1 className="location-name">{props.altAndTitle}</h1>
          </li>
          <li>
            <p className="date">
              {props.startDate} - {props.endDate}
            </p>
          </li>
          <li>
            <p className="location-para">{props.paragraph}</p>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Main;
