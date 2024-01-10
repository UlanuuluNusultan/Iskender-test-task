import { Container } from "../../style/style";
import icon from "../../../public/shop/icon.svg";
import Location from "../../../public/shop/Location.svg";
import time from "../../../public/shop/time.svg";
import phone from "../../../public/shop/phone.svg";
import arrow from "../../../public/shop/arrow.svg";
import "./Shop.css";

const Adress = [
  {
    name: "Кыргызстан, г. Бишкек ул. Турусбекова A167",
  },
  {
    name: "Кыргызстан, г. Бишкек ул. Лермонтова 6",
  },
  {
    name: "Кыргызстан, г. Бишкек ул. Льва-Толстого 19",
  },
];
export default function Shop() {
  return (
    <div>
      <Container>
        <h1 className="adress">Адреса магазинов</h1>
        <div className="big-card">
          {Adress.map((el) => (
            <div className="adress-card" key={el.id}>
              <div className="cap">
                <div className="iscender">
                  <img src={icon} alt="" className="icon" />
                  <div>
                    <p>Iskender home</p>
                    <a href="#" style={{ color: "#0062D5" }}>
                      открыть в карте
                    </a>
                  </div>
                </div>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="location">
                <img src={Location} alt="" />
                <p style={{ width: "169px" }}>{el.name} </p>;
              </div>
              <div className="phone">
                <div>
                  <img src={time} alt="" />
                  <span>08:00 - 22:00</span>
                </div>
                <div>
                  <img src={phone} alt="" />
                  <span>+996 500 345 345</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

