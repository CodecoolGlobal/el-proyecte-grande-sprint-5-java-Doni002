import React from 'react';
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import {Parallax} from "react-parallax";
import Office from "../components/img/otherImg/office.jpg";
import Abstract from "../components/img/otherImg/abstract.jpg"
import ContactContainer from "../components/contact/contactContainer";
import Article from "../components/article/Article";
import RolandMarton from "../components/img/contactUsImg/RolandMarton.jpeg";
import BarbaraHuszar from "../components/img/contactUsImg/BarbaraHuszar.jpg";
import AlparDonat from "../components/img/contactUsImg/AlparDonat.jpg";
import ZsoltPinter from "../components/img/contactUsImg/ZsoltPinter.jpg";


const Contact = () => {
    return (
        <>
            <Parallax bgImage={Abstract} strength={300}>
                <Navbar />
                <ContactContainer
                    header = "Contact Us"
                    text = "If you have any doubt or question about Aurora, contact the customer service"
                />
            </Parallax >
            <Parallax bgImage={Office} strength={-300}>
                <h1 id="developerHeader">Developers Looking For A Job</h1>
                <Article
                    animation = "animationFromLeft"
                    text="A young and enthusiastic Software Developer with critical thinking, problem-solving, negotiation, outstanding in both oral and written communication, and easily adaptable interpersonal skills. Moreover, working in a team means no difficulties due to my emotional intelligence and social collaboration, also rather an exciting journey for me. I'm still enthusiastic about grabbing onto any other programming languages, frameworks, and principles I can integrate into the coding web in my head."
                    title="Roland Marton - Frontend Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {RolandMarton}
                    link = "https://www.linkedin.com/in/roland-m%C3%A1rton-632681216/"
                    pictureSide = "left"
                    hashTags = "#HTML #CSS #Bootstrap5 #TailwindCSS #Sass #Javascript #Typescript #React #Angular #Git #Java #JUnit #Thymeleaf #SpringBoot #Python-Flask #Jinja #PostgreSQL #SQL #Python #VScode #Pycharm #IntelliJ-Idea #Unittest #Docker #Postman"
                />
                <Article
                    animation = "animationFromRight"
                    text="Solution-focused mind with a creative touch. Eager to learn. Her easy going personality makes it easy to make a good fit in any team."
                    title="Barbara Szabo-Huszar - Fullstack Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {BarbaraHuszar}
                    link = "https://www.linkedin.com/in/szabohuszarbarbara/"
                    pictureSide = "right"
                />
                <Article
                    animation = "animationFromLeft"
                    text="Insert your promo here"
                    title="Alpar Donat - Fullstack Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {AlparDonat}
                    link = "https://www.linkedin.com/in/donat-alpar-bba557202/"
                    pictureSide = "left"
                />
                <Article
                    animation = "animationFromRight"
                    text="An Ambitious And Aspiring Fullstack Software Developer From Codecool Academy With Excellent Hard Skills To Work On The Most Difficult Projects, Problems. Moreover, Distinguished Soft Capabilities To Work In A Team As A Leader Or Member Either. I'm Still Enthusiastic About Grabbing Onto Any Other Programming Languages, Frameworks."
                    title="Zsolt Pinter - Fullstack Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {ZsoltPinter}
                    link = "https://www.linkedin.com/in/zsolt-pinter-a33989249/"
                    pictureSide = "right"
                    hashTags = "#HTML #CSS #Bootstrap5 #Javascript #React #Git #Java #Thymeleaf #SpringBoot #Python-Flask #Jinja #PostgreSQL #SQL #Python #VScode #Pycharm #IntelliJ-Idea #Unittest #Docker #Postman #C C++ #C#"
                />
            </Parallax>
            <Footer />
        </>
    );
};

export default Contact;
