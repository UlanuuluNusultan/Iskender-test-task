import { Container } from "../../../style/style";
import logo from "../../../../public/logo.svg";
import burger from "../../../../public/more/burger.svg";
import cart from "../../../../public/header/Cart.svg";
import profile from "../../../../public/header/Profile.svg";
import line from "../../../../public/header/line.svg";
import "./Header.css";
import styled from "styled-components";
export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="katalog">
            <div className="search">
              <img src={burger} alt="" />
              <Span>Каталог</Span>
            </div>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Поиск" className="input" />
          </div>
          <div className="user-log">
            <div>
              <P>Добро пожаловать</P>
              <H4>Вход/Регистрация</H4>
            </div>
            <div className="user-log">
              <Profile>
                <img src={profile} alt="" />
              </Profile>
              <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"10px",marginRight:"10px"}}>
                <img src={line} alt="" />
              </div>
              <Cart>
                <img src={cart} alt="" />
              </Cart>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

const Span = styled.span`
  color: #fff;
  font-family: Gilroy;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 15px */
  margin-left: 10px;
`;
const P = styled.p`
  color: #fff;
  font-family: Gilroy;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: end;
`;
const H4 = styled.h4`
  color: #fff;
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #c1c1c1;
  background-color: #ffffff;
  margin-left: 10px;
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
`;
