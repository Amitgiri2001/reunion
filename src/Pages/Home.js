import React from 'react';
import TopSlider from "../Components/TopSlider/TopSlider";
import CardSlider from "../Components/CardSlider/CardSlider";
import Venue from "../Components/Venue/Venue";
import Details from '../Components/HomeDetails/Details';
import Template from '../Components/Template/SwipeTemplate/Template';

const Home = () => {
    return (
        <>
            <TopSlider />
            <Details />

            <CardSlider />
            <Venue />
        </>
    )
}

export default Home