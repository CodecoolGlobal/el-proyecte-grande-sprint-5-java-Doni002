import "../components/suggestion/suggestion.css"

import MapGuy from '../components/img/articleImg/Guywithamap-small.jpg'
import Business from '../components/img/articleImg/business-small.jpg'

import Article from '../components/article/Article';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import CategorySlider from "../components/category/CategorySlider";
import ToggleArticle from '../components/toggleArticle/ToggleArticle';
import ProgressBarContainer from "../components/statistics/ProgressBarContainer";
import Slideshow from "../components/slideshow/slideshow";
import Suggestion from "../components/suggestion/Suggestion";

const Home = () => {

    return (
        <>
            <Header />
            <ProgressBarContainer />
            <Article
                animation = "animationFromLeft"
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
                animation = "animationFromRight"
                text = "Aurora gives you the freedom to become a host for people in need of
transportation, and joy. If you have the opportunity to share your car and
get exclusive rewards with percentage-based passive income. Don't wait no
more. This is the right place to get the business done with our help."
                title = "Become a host"
                imageSource = {Business}
                buttonText = "Get started"
                link = "/vehicles"
                pictureSide = "right"
            />
            <ToggleArticle />
            <Slideshow />
            <article id="suggestionArticleContainer">
                <Suggestion animation = "animationFromLeft" value="host"/>
                <Suggestion animation = "animationFromRight" value="renter"/>
            </article>
            <CategorySlider/>
            <Footer />
        </>
    );
};

export default Home;
