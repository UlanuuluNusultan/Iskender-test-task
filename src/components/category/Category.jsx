import { Categories } from "../../constants/constants";
import { Container } from "../../style/style";
import "./Category.css";
export default function Category() {
  return (
    <div>
      <Container>
        <h1 className="title"> Категории</h1>
        <div className="category">
          {Categories.map((el) => (
            <div key={el.id} className="cart">
              <div>
                <p className="description">{el.title}</p>
                <p className="tovar">3000 товаров</p>
              </div>
              <div>
                <img src={el.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
