import Auction from "./components/Auction/Auction";
import Category from "./components/category/Category";
import Hit from "./components/hit/Hit";
import { Footer } from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import More from "./components/more/More";
import News from "./components/news/News";
import Shop from "./components/shop/Shop";

export default function App() {
  return (
    <div>
      <Header />
      <More />
      <Category />
      <Hit />
      <News />
      <Auction />
      <Shop />
      <Footer />
    </div>
  );
}
