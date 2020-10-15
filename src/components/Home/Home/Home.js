import React from 'react';
import Feedbacks from '../Feedbacks/Feedbacks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Works />
            <Feedbacks />
            <Footer />
        </div>
    );
};

export default Home;