import { useState } from "react";
import { Container } from "../../style/style";
import { news, news as initialData } from "../../constants/constants";
import roundet from "../../../public/roundet.svg";
import right from "../../../public/left.svg";
import left from "../../../public/right.svg";
import "./News.css";

export default function NewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const slidesPerPage = 3; // По три точки для каждой группы слайдов

  const maxIndex = initialData.length - cardsPerPage;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div>
      <Container>
        <h1 className="news">Новости</h1>
        <div className="cont">
          <div className="slider-container">
            <ul className="NewsContainer">
              {news.slice(startIndex, startIndex + cardsPerPage).map((e) => (
                <li key={e.id} className="box">
                  <div className="info">
                    <h1>-{e.sale}</h1>
                    <p>{e.desc}</p>
                    <button className="podrobnee">Подробнее</button>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99"
                    height="47"
                    viewBox="0 0 99 47"
                    fill="none"
                    className="ru"
                  >
                    <ellipse
                      cx="55.5308"
                      cy="-8.85143"
                      rx="55.3292"
                      ry="55.3292"
                      fill="#D7EEFE"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="83"
                    viewBox="0 0 96 83"
                    fill="none"
                    className="ron"
                  >
                    <ellipse
                      cx="39.8343"
                      cy="55.712"
                      rx="55.3292"
                      ry="55.3292"
                      fill="#D7EEFE"
                    />
                  </svg>
                  <img src={roundet} alt="" className="flow" />
                </li>
              ))}
            </ul>
            <div className="slide-dots">
              {[...Array(slidesPerPage)].map((_, index) => (
                <span
                  key={index}
                  className={
                    Math.floor(startIndex / cardsPerPage) === index
                      ? "dot active"
                      : "dot"
                  }
                  onClick={() => setStartIndex(index * cardsPerPage)}
                ></span>
              ))}
            </div>
            <img
              src={left}
              onClick={prevSlide}
              className="news-left"
              alt="previous"
            />
            <img src={right} onClick={nextSlide} className="news-right" alt="next" />
          </div>
        </div>
      </Container>
    </div>
  );
}
