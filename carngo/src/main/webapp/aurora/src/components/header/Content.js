import './Header.css';
import Button from "./Button";

const Content = (props) => {
    return (
        <>
            <div className='content'>
                <div className="column">
                    <div className="wrapper">
                        <div className="img-txt">
                            <h2 style={{
                                letterSpacing: '5px',
                                fontSize: '2rem',
                                textAlign: 'center'
                            }}>The world of <strong style={{
                                color: "red"
                            }}>Aurora</strong> is now</h2>
                            <p style={{
                                fontSize: '1.5rem',
                                wordSpacing: '5px',
                                lineHeight: '2rem'
                            }}>We are a company that's make high-quality car sharing service with
                                extraordinary vehicles with an emphasis on performance.</p>
                            <Button className="glow-on-hover" text="See catalogue"/>
                        </div>
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
        </>
    );
};

export default Content;