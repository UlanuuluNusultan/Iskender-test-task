import { Container } from "../../style/style";
import "./More.css";
import { Mores } from "../../constants/constants";
export default function More() {
  return (
    <div className="more">
      <Container>
        <div className="flex">
          {Mores.map((el) => (
            <div className="card" key={el.id}>
              <img
                src={el.img}
                alt=""
                style={{ borderRadius: "50%" }}
                width={60}
                height={60}
              />
              <p className="text">{el.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
