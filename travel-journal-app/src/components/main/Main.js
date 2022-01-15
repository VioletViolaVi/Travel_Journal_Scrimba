import mountain from "../images/mountain.jpg";

const Main = () => {
  return (
    <main>
      <section>
        <figure>
          <img src={mountain} alt={"Mount Fuji"} />
        </figure>
        <ul>
          <li>
            <i class="fas fa-map-marker-alt"></i> <span>JAPAN</span>{" "}
            <span>View on Google Maps</span>
          </li>
          <li>
            <h1>Mount Fuji</h1>
          </li>
          <li>
            <p>12 Jan, 2021 - 24 Jan, 2021</p>
          </li>
          <li>
            <p>
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
