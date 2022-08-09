import { Link } from 'react-router-dom';
import Article from '../components/article/Article';
import Header from '../components/header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Link to="/vehicles"> <button>Test</button> </Link>
            <Article
                text = "At Article, we’re all about great style. Think sleek modular sofas, anything-but-basic beds, smart sideboards, and more — all designed with premium quality and comfort in mind. It’s contemporary furniture meets unparalleled value. Nice, right?"
                title = "hello im title"
                imageSource = "https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=50832681a7&attid=0.2&permmsgid=msg-f:1740678482340661791&th=182821db7014ca1f&view=att&disp=inline&realattid=f_l6m13q4w1&saddbat=ANGjdJ8-RDB2gb0koV7mdrg7Zds35GiDa1Z6nDjQ_1fDcucHGJx9Ir__12R13zweyENPxCTcfpNQ1ijAacGsmNRbwitGlWVY04nfgjOWMtC7ZcAWD9LmpfALi2pwI4U7kYyyaBvjpTTmjnGnwgXn18zL45mts6l2EXbMOy2Dt3cqorQKRXqtjFRnRTb8qLt1eXu_W4VvTKFolMZmizQBK-GMEIc9NyIUN2eHLSjOJvjIuWVjZNgG5Rl0kch8pnNrT7cVOTezNsi6tfoMk99ZsvqOKav7zb1YNpj6F8enJJuDjwKKzpbv32MVwzqvVTtHNG7hmpAh_RjmcI656YFzueEbv45IFhmh2OaZ3NeLzBWQP1ofVHB37bI0yPI1nTcQllywREHSQGLWRkwrVUQrzQr6aaYaRTwdiLAvMytxHURGvI016DUYIsGletrAnvcnOuDVopoOuu4tZ4ULZZ7GQJlAZRG4aNQnSf4CRuF7Nbg_KrYH0aQX5Mx1QDLqAsvAb2siXQ2PlHlX_BgCfFgoOUH5x62Ie35Q5oywLPqVWsaA5_A7xVjrXJw6c0Xmak1ePd6Bw5cYt0feMq3wckElsrU9NsDj9BiETZ0CVGjWV5aA5_CGlJkd1CHlCXKm2fq5lSm1s4UEi6GTsLH5i2M7MNYsolBc9dYLUP2wMQMFNRJFT0MkHY4BZRWzBJMrXZmJujwYoPTjQXrdJfXlt3icrH-EfruNfzjxSpOMF5I2jeE2sr-KSKDdcQOIy-tiEqTeOT_KoFE9ah_JeQA0xv11J5fFVNCKUNZmxCKdVg9BlCdU4WP-Sta-ZoUgy_pHZSY8_fDPH0pT5Je703djz2xYGrlOPb_sqTB5Ho5M9i9o1UbyBNMcfmCSSfjRxl3I8fo"
                buttonText = "click me"
                link = "/vehicles"
                pictureSide = "left"
                />
                <Article
                text = "At Article, we’re all about great style. Think sleek modular sofas, anything-but-basic beds, smart sideboards, and more — all designed with premium quality and comfort in mind. It’s contemporary furniture meets unparalleled value. Nice, right?"
                title = "hello im title"
                imageSource = "https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=50832681a7&attid=0.2&permmsgid=msg-f:1740678482340661791&th=182821db7014ca1f&view=att&disp=inline&realattid=f_l6m13q4w1&saddbat=ANGjdJ8-RDB2gb0koV7mdrg7Zds35GiDa1Z6nDjQ_1fDcucHGJx9Ir__12R13zweyENPxCTcfpNQ1ijAacGsmNRbwitGlWVY04nfgjOWMtC7ZcAWD9LmpfALi2pwI4U7kYyyaBvjpTTmjnGnwgXn18zL45mts6l2EXbMOy2Dt3cqorQKRXqtjFRnRTb8qLt1eXu_W4VvTKFolMZmizQBK-GMEIc9NyIUN2eHLSjOJvjIuWVjZNgG5Rl0kch8pnNrT7cVOTezNsi6tfoMk99ZsvqOKav7zb1YNpj6F8enJJuDjwKKzpbv32MVwzqvVTtHNG7hmpAh_RjmcI656YFzueEbv45IFhmh2OaZ3NeLzBWQP1ofVHB37bI0yPI1nTcQllywREHSQGLWRkwrVUQrzQr6aaYaRTwdiLAvMytxHURGvI016DUYIsGletrAnvcnOuDVopoOuu4tZ4ULZZ7GQJlAZRG4aNQnSf4CRuF7Nbg_KrYH0aQX5Mx1QDLqAsvAb2siXQ2PlHlX_BgCfFgoOUH5x62Ie35Q5oywLPqVWsaA5_A7xVjrXJw6c0Xmak1ePd6Bw5cYt0feMq3wckElsrU9NsDj9BiETZ0CVGjWV5aA5_CGlJkd1CHlCXKm2fq5lSm1s4UEi6GTsLH5i2M7MNYsolBc9dYLUP2wMQMFNRJFT0MkHY4BZRWzBJMrXZmJujwYoPTjQXrdJfXlt3icrH-EfruNfzjxSpOMF5I2jeE2sr-KSKDdcQOIy-tiEqTeOT_KoFE9ah_JeQA0xv11J5fFVNCKUNZmxCKdVg9BlCdU4WP-Sta-ZoUgy_pHZSY8_fDPH0pT5Je703djz2xYGrlOPb_sqTB5Ho5M9i9o1UbyBNMcfmCSSfjRxl3I8fo"
                buttonText = "click me"
                link = "/vehicles"
                pictureSide = "right"
                />
                <Article
                text = "At Article, we’re all about great style. Think sleek modular sofas, anything-but-basic beds, smart sideboards, and more — all designed with premium quality and comfort in mind. It’s contemporary furniture meets unparalleled value. Nice, right?"
                title = "hello im title"
                imageSource = "https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=50832681a7&attid=0.2&permmsgid=msg-f:1740678482340661791&th=182821db7014ca1f&view=att&disp=inline&realattid=f_l6m13q4w1&saddbat=ANGjdJ8-RDB2gb0koV7mdrg7Zds35GiDa1Z6nDjQ_1fDcucHGJx9Ir__12R13zweyENPxCTcfpNQ1ijAacGsmNRbwitGlWVY04nfgjOWMtC7ZcAWD9LmpfALi2pwI4U7kYyyaBvjpTTmjnGnwgXn18zL45mts6l2EXbMOy2Dt3cqorQKRXqtjFRnRTb8qLt1eXu_W4VvTKFolMZmizQBK-GMEIc9NyIUN2eHLSjOJvjIuWVjZNgG5Rl0kch8pnNrT7cVOTezNsi6tfoMk99ZsvqOKav7zb1YNpj6F8enJJuDjwKKzpbv32MVwzqvVTtHNG7hmpAh_RjmcI656YFzueEbv45IFhmh2OaZ3NeLzBWQP1ofVHB37bI0yPI1nTcQllywREHSQGLWRkwrVUQrzQr6aaYaRTwdiLAvMytxHURGvI016DUYIsGletrAnvcnOuDVopoOuu4tZ4ULZZ7GQJlAZRG4aNQnSf4CRuF7Nbg_KrYH0aQX5Mx1QDLqAsvAb2siXQ2PlHlX_BgCfFgoOUH5x62Ie35Q5oywLPqVWsaA5_A7xVjrXJw6c0Xmak1ePd6Bw5cYt0feMq3wckElsrU9NsDj9BiETZ0CVGjWV5aA5_CGlJkd1CHlCXKm2fq5lSm1s4UEi6GTsLH5i2M7MNYsolBc9dYLUP2wMQMFNRJFT0MkHY4BZRWzBJMrXZmJujwYoPTjQXrdJfXlt3icrH-EfruNfzjxSpOMF5I2jeE2sr-KSKDdcQOIy-tiEqTeOT_KoFE9ah_JeQA0xv11J5fFVNCKUNZmxCKdVg9BlCdU4WP-Sta-ZoUgy_pHZSY8_fDPH0pT5Je703djz2xYGrlOPb_sqTB5Ho5M9i9o1UbyBNMcfmCSSfjRxl3I8fo"
                buttonText = "click me"
                link = "/vehicles"
                pictureSide = "left"
                />
        </>
    );
};

export default Home;