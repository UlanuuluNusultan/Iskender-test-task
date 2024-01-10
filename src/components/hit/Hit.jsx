import { Container } from "../../style/style";
import {
  bestseller_data,
  bestseller_data as initialData,
} from "../../constants/constants";
import { useState } from "react";
import minus from "../../../public/minus.svg";
import plus from "../../../public/plus.svg";
import right from "../../../public/left.svg";
import left from "../../../public/right.svg";
import "./Hit.css";

export default function Hit() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 6;
  const slidesPerPage = 3; // Точки пагинации, одна точка для каждых 2 слайдов

  const maxIndex = initialData.length - cardsPerPage;

  const [bestsellerData, setBestsellerData] = useState(initialData);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const decreaseCount = (index) => {
    const newData = [...bestsellerData];
    newData[startIndex + index].count =
      (newData[startIndex + index].count || 1) - 1;
    setBestsellerData(newData);
  };

  const increaseCount = (index) => {
    const newData = [...bestsellerData];
    newData[startIndex + index].count =
      (newData[startIndex + index].count || 1) + 1;
    setBestsellerData(newData);
  };

  return (
    <div>
      <Container>
        <h2 className="hitt">Хиты продаж</h2>
        <div className="slider-container">
          <ul className="BestsellerContainer">
            {bestseller_data
              .slice(startIndex, startIndex + cardsPerPage)
              .map((el, index) => (
                <li
                  key={el.id}
                  className={`li ${index === 0 ? "active" : ""}`}
                  id={`slide-${startIndex + index}`}
                >
                  <img src={el.img} alt={el.name} className="img" />
                  <p className="p">{el.description}</p>
                  <span className="Amount">{el.amount} c</span>
                  <span className="Status">{el.status}</span>
                  <span className="Quantity">{el.quantity}</span>

                  <div className="Buttons">
                    <img
                      src={minus}
                      alt=""
                      className="bu"
                      onClick={() => {
                        decreaseCount(index);
                      }}
                    />
                    <p>{el.count || 1}</p>
                    <img
                      src={plus}
                      className="bu"
                      onClick={() => {
                        increaseCount(index);
                      }}
                    />
                  </div>
                </li>
              ))}
          </ul>
          <div className="slide-dots">
            {[...Array(slidesPerPage)].map((_, index) => (
              <span
                key={index}
                className={
                  Math.floor(startIndex / slidesPerPage) === index
                    ? "dot active"
                    : "dot"
                }
                onClick={() => setStartIndex(index * slidesPerPage)}
              ></span>
            ))}
          </div>
          <img src={left} onClick={prevSlide} className="left" alt="previous" />
          <img src={right} onClick={nextSlide} className="right" alt="next" />
        </div>
        <div className="LinkToCatalog">
          <a href="/catalog">все</a>
        </div>
      </Container>
    </div>
  );
}
