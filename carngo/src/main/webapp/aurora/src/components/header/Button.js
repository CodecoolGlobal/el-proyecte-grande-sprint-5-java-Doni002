const Button = (props) => {
    return (
        <>
            <a href="/vehicles"><button className="glow-on-hover">{props.text}</button></a>
        </>
    );
};

export default Button;
