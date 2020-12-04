import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="amazon"
            />
                <div className="home__row">
                    <Product
                        id='12345'
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={2}
                    />
                    <Product 
                        id='12346'
                        title='Kenwood kMix Stand Mixer for Baking'
                        price={239.99}
                        image='https://m.media-amazon.com/images/I/610aaf2s9ZL.jpg'
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id='1234667'
                        title='Samsung Led Gaming Monitor'
                        price={199.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3}
                    />
                    <Product 
                        id='1234609'
                        title='Amazon Echo Smart Speaker'
                        price={98.99}
                        image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287974_sd.jpg;maxHeight=640;maxWidth=550'
                        rating={5}
                    />
                    <Product 
                        id='1234677'
                        title='New Apple iPad Pro - Silver'
                        price={239.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81lqq8UF5ML._AC_SL1500_.jpg '
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id='1234667'
                        title='Samsung Led Gaming Monitor'
                        price={199.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51mrFiQ-lkL._AC_SY400_.jpg'
                        rating={3}
                    />
                </div>
            </div>            
        </div>
    )
}

export default Home
