
import './carModal.css';

const CarModal = () => {

    const renderContent = () => {

            return(
                <div className='modalForm'>
                    <h1 className='loginWelcomeText'>Welcome Back!</h1>
                </div>
            )
        }


    return (
        <div className='carModalContainer'>
            {renderContent()}
        </div>
    );
}

export default CarModal;