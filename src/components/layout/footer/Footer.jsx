import { styled } from "styled-components";
import { address } from "../../../constants/constants";
import AppStore from "../../../../public/more/app-store.svg";
import GooglepPay from "../../../../public/more/google-pay.svg";
import logo from "../../../../public/logo.svg";
import insta from "../../../../public/footer/logo-instagram.svg";
import feis from "../../../../public/footer/Group.svg";
export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <LogoAside>
          <img src={logo} alt="" />
          <p>
            Первый отечественный бренд Iskender на рынке сантехники от компании
            ОсОО «Стройдом.кг»
          </p>
          <div>
            <a href="https://play.google.com/store/games?hl=ru&gl=US">
              <img src={AppStore} alt="" />
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src={GooglepPay} alt="" />
            </a>
          </div>
        </LogoAside>
        <Address>
          <h5>Адреса</h5>
          {address.map((e) => (
            <li key={e.id}>
              <p>{e.name}</p>
              <span>{e.addres}</span>
            </li>
          ))}
        </Address>
        <Company>
          <h5>Компания</h5>
          <li>Каталог</li>
          <li>Избранное</li>
          <li>Личный кабинет</li>
        </Company>
        <Contacts>
          <h5>Контакты</h5>
          <li>
            <p style={{ marginBottom: "5px" }}>Email</p>
            <span>iskender.kg@gmail.com</span>
          </li>
          <li>
            <p style={{ marginBottom: "5px" }}>Телефон</p>
            <div>
              <p>+996 (500) 000-104 +996 </p>
              <p> (997) 000-104 +996 </p>
              <p>(222) 000-104</p>
            </div>
          </li>
        </Contacts>
      </FooterContainer>
      <Footer_end>
        <p>&copy; 22023 Iskender.kg - Отечественный бренд сантехники</p>
        <div>
          <img src={insta} alt="" />
          <img src={feis} alt="" style={{ marginLeft: "15px" }} />
        </div>
      </Footer_end>
    </FooterStyled>
  );
};
const FooterStyled = styled.footer`
  background: linear-gradient(107deg, #3186c3 6.46%, #004f86 68.08%);
  padding-top: 50px;
`;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 1240px;
  margin: 0 auto;
  padding: 15px 0;
  color: #fff;

  img {
    width: 180px;
    margin: 0 0 42px 0;
  }
  p {
    width: 200px;
  }
`;
const LogoAside = styled.div`
  display: flex;
  flex-direction: column;

  p {
    width: 230px;
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 72px;
  }

  div {
    display: flex;
    gap: 12px;

    a {
      img {
        background-color: #000;
        padding: 6px;
        border-radius: 10px;
      }
    }
  }
`;
const Address = styled.ul`
  h5 {
    color: #fff;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  li {
    margin-bottom: 20px;

    p {
      color: #e0e0e0;
      font-family: Gilroy;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    span {
      color: #fff;
      font-family: Gilroy;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
const Company = styled.ul`
  h5 {
    color: #fff;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  li {
    font-size: 14px;
    font-weight: 500;
    margin: 15px;
  }
`;
const Contacts = styled.ul`
  h5 {
    color: #fff;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  li {
    font-size: 14px;
    font-weight: 500;
    margin: 15px;
  }
`;
const Footer_end = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  p {
    color: var(--Transparent-white, rgba(255, 255, 255, 0.5));
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
