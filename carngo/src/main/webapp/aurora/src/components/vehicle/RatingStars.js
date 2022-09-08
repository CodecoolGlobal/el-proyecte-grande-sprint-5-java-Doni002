import {GiRoundStar} from "react-icons/gi";

function RatingStars(props){
    let counter = props.counter;
    let stars = [];
    let star = <GiRoundStar/>;
    while(counter !== 0){
        stars.push(star);
        counter--;
    }
    return (
        <>{stars}</>
    );
}
export default RatingStars;