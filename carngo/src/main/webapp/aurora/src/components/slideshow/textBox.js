const TextBox = (props) => {
    return (
        <div className="text-box">
            <h3>{props.heading}</h3>
            <p>{props.paragraph}</p>
        </div>
    );
};

export default TextBox;