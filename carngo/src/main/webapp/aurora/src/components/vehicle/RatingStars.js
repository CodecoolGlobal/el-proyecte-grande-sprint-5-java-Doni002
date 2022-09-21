import {GiRoundStar} from "react-icons/gi";

function RatingStars(props){
    let counter = props.counter;
    let stars = [];
    while(counter !== 0){
        stars.push(<GiRoundStar key={props.counter + counter}/>);
        counter--;
    }
    return (
        <>{stars}</>
    );
}
export default RatingStars;