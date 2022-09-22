import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";
import {useEffect} from "react";
import {motion} from 'framer-motion';


const Suggestion = (props) => {

    const {ref, inView} = useInView({
        threshold: 0
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
        if(!inView){
            animation.start('hidden');
        }
    }, [animation, inView]);

    const animationVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const elements = [
        {
            mainHeading: "Why should you share your car?",
            mainParagraph: "seize the moment and become a successful host within a moment. Make your network grow and get a massive amount of passive income now.",
            subText: [
                {
                    head: "Free Registration",
                    paragraph: "Car registration is also simple and free. All you need is basic information about your car and some well-done photos.",
                },
                {
                    head: "Risk-Free-Rental",
                    paragraph: "There's no charge to sign up or share your car. All you have to do is keep it ready for rental, respond quickly to applicants, and let it make you money",
                },
            ],
        }, {
            mainHeading: "Why should you rent a car?",
            mainParagraph: "Aurora's car network is like no other, if you ever wanted to live your dream journey with the car you ever wanted. This is the moment to rent one!",
            subText: [
                {
                    head: "Free Registration",
                    paragraph: "Registration is free and easy. After registering, you are free to choose from the cars that best suit your goals",
                },
                {
                    head: "Free cancellation",
                    paragraph: "Have your plans changed after reservation? We provide several options to get your money back quickly in case of cancellation",
                },
                {
                    head: "Security deposit free cars",
                    paragraph: "Hosts may choose to share their car with security deposit or without. If you are looking for deposit-free cars, use filters.",
                },
            ],
        },
    ]

    function renderElements() {
        if(props.value === "renter"){
            return (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={animationVariants}
                >
                    <div id="hostMainTextContainer">
                        <h1 className="articleTitle">{elements[0].mainHeading}</h1>
                        <p className="articleText">{elements[0].mainParagraph}</p>
                        <div id="renterSubTextContainer">
                            {elements[0].subText.map(item => {
                                return (
                                    <div key={item.head}>
                                        <h3 id="renterSubHeading">{item.head}</h3>
                                        <p id="renterSubParagraph">{item.paragraph}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

            );
        } else if (props.value === "host"){
            return (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={animationVariants}
                >
                    <div id="renterMainTextContainer">
                        <h1 className="articleTitle">{elements[1].mainHeading}</h1>
                        <p className="articleText">{elements[1].mainParagraph}</p>
                        <div id="hostSubTextContainer">
                            {elements[1].subText.map(item => {
                                return (
                                    <div key={item.head}>
                                        <h3 id="hostSubHeading">{item.head}</h3>
                                        <p id="hostSubParagraph">{item.paragraph}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            );
        }
    }

    return (
        <>
            {renderElements()}
        </>
    );
};

export default Suggestion;
