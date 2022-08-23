import React from 'react';
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import {Parallax} from "react-parallax";
import Office from "../components/img/office.jpg";
import Abstract from "../components/img/abstract.jpg"
import ContactContainer from "../components/contact/contactContainer";
import Article from "../components/article/Article";
import RolandMarton from "../components/img/RolandMarton.jpeg";
import BarbaraHuszar from "../components/img/BarbaraHuszar.jfif";
import AlparDonat from "../components/img/AlparDonat.jpg";


const Contact = () => {
    return (
        <>
            <Parallax bgImage={Abstract} strength={500}>
                <Navbar />
                <ContactContainer
                    header = "Contact Us"
                    text = "If you have any doubt or question about Aurora, contact the customer service"
                />
            </Parallax >
            <Parallax bgImage={Office} strength={-500}>
                <h1 id="developerHeader">Developers Looking For A Job</h1>
                <Article
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
                    text="Insert your promo here"
                    title="Barbara Szabo-Huszar - Fullstack Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {BarbaraHuszar}
                    link = "https://www.linkedin.com/in/szabohuszarbarbara/"
                    pictureSide = "right"
                />
                <Article
                    text="Insert your promo here"
                    title="Alpar Donat - Fullstack Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {AlparDonat}
                    link = "https://www.linkedin.com/in/roland-m%C3%A1rton-632681216/"
                    pictureSide = "left"
                />
                <Article
                    text="Insert your promo here"
                    title="Zsolt Pinter - Fullstack Developer"
                    buttonText = "Check out profile"
                    textColor = "white"
                    imageSource = {RolandMarton}
                    link = "https://www.linkedin.com/in/roland-m%C3%A1rton-632681216/"
                    pictureSide = "right"
                />
            </Parallax>
            <Footer />
        </>
    );
};

export default Contact;