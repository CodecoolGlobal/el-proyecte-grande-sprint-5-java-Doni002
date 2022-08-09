import './Header.css';
import Button from "./Button";

const Content = () => {
    return (
        <>
            <div className='content'>
                <div className="column">
                    <div className="wrapper">
                        <div className="img-txt">
                            <h2 style={{
                                letterSpacing: '10px',
                                fontSize: '2rem',
                                textAlign: 'center'
                            }}>The world of <strong>Aurora</strong> is now</h2>
                            <p style={{
                                fontSize: '1.5rem',
                                wordSpacing: '5px',
                                lineHeight: '2rem'
                            }}>We are a company that's make high-quality car sharing service with
                                extraordinary vehicles with an emphasis on performance.</p>
                            <Button />
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