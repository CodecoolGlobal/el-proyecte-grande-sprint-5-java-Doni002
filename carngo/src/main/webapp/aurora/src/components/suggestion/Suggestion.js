import {forEach} from "react-bootstrap/ElementChildren";

const Suggestion = (props) => {

    const elements = [
        {
            mainHeading: "Why should you share your car?",
            mainParagraph: "seize the moment and become a successful host within a moment. Make your network grow and get a massive amount of passive income now.",
            subHeading: {
                1: "Free Registration",
                2: "Risk-Free-Rental"
            },
            subParagraph: {
                1: "Car registration is also simple and free. All you need is basic information about your car and some well-done photos.",
                2: "There's no charge to sign up or share your car. All you have to do is keep it ready for rental, respond quickly to applicants, and let it make you money"
            }
        }, {
            mainHeading: "Why should you rent a car?",
            mainParagraph: "Aurora's car network is like no other, if you ever wanted to live your dream journey with the car you ever wanted. This is the moment to rent one!",
            subHeading: {
                1: "Free Registration",
                2: "Free cancellation",
                3: "Security deposit free cars"
            },
            subParagraph: {
                1: "Registration is free and easy. After registering, you are free to choose from the cars that best suit your goals",
                2: "Have your plans changed after reservation? We provide several options to get your money back quickly in case of cancellation",
                3: "Hosts may choose to share their car with security deposit or without. If you are looking for deposit-free cars, use filters."
            }
        },
    ]

    function renderSubElements(role) {
        if (props.value === role) {

            return (elements.map((element) => (
                element.map((subElement) => (
                    subElement.map((item, index) => (
                        (<>
                            <div>{item[index].subHeading}</div>
                            <div>{item[index].subParagraph}</div>
                        </>)
                    ))
                ))
            )))
        }
    }

    const renderElements = () => {
        if(props.value === "renter"){
            return (
                <div id="hostMainTextContainer">
                    <h1 className="articleTitle">{elements[0].mainHeading}</h1>
                    <p className="articleText">{elements[0].mainParagraph}</p>
                    <div id="renterSubTextContainer">
                        {renderSubElements("host")}
                    </div>
                </div>
            );
        } else if (props.value === "host"){
            return (
                <div id="renterMainTextContainer">
                    <h1 className="articleTitle">{elements[1].mainHeading}</h1>
                    <p className="articleText">{elements[1].mainParagraph}</p>
                    <div id="hostSubTextContainer">
                        {renderSubElements("renter")}
                    </div>
                </div>
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