import mountain from "../images/mountain.jpg";
import Data from "../data/Data";

const Main = () => {
  console.log(Data);
  return (
    <main>
      <section>
        <figure>
          <img src={mountain} alt={"Mount Fuji"} className="travel-image" />
        </figure>
        <ul className="travel-info">
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span className="country-name">JAPAN</span>
            <a
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606422,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
              className="map-link"
            >
              View on Google Maps
            </a>
          </li>
          <li>
            <h1 className="location-name">Mount Fuji</h1>
          </li>
          <li>
            <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
          </li>
          <li>
            <p className="location-para">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Main;
