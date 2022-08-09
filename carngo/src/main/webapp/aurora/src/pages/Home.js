import Article from '../components/article/Article';
import Header from '../components/header/Header';
import MapGuy from '../components/img/Guywithamap.jpg'
import Business from '../components/img/business.jpg'
import Money from '../components/img/Money.jpg'

import CategorySlider from "../components/category/CategorySlider";

const Home = () => {
    return (
        <>
          <Header />
            <Article
              text = "There are more than 1 million hosts worldwide to get your car from, and
waiting for your reply to start your journey. The choice is yours to seize
the moment to get unforgettable memories with your treasure-worthy
friends or family with your dream car, with the help of Aurora."
              title = "Rent your first car and start your journey now"
              imageSource = {MapGuy}
              buttonText = "Get started"
              link = "/vehicles"
              pictureSide = "left"
              />
            <Article
              text = "Aurora gives you the freedom to become a host for people in need of
transportation, and joy. If you have the opportunity to share your car and
get e x clusive rewards with percentage-based passive income. Don't wait no
more. This is the right place to get the business done with our help."
              title = "Become a host"
              imageSource = {Business}
              buttonText = "Get started"
              link = "/vehicles"
              pictureSide = "right"
              />
            <Article
              text = "At Article, we’re all about great style. Think sleek modular sofas, anything-but-basic beds, smart sideboards, and more — all designed with premium quality and comfort in mind. It’s contemporary furniture meets unparalleled value. Nice, right?"
              title = "hello im title"
              imageSource = {Money}
              buttonText = "Get started"
              link = "/vehicles"
              pictureSide = "left"
              />
            <CategorySlider/>
        </>
    );
};

export default Home;