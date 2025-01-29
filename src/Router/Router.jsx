import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import PostFlat from '../Components/Pages/PostFlat';
// import LookingFor from '../Components/Pages/LookingFor';
// import Reviews from '../Components/Pages/Reviews';
import Room from '../Components/Pages/rooms/Room';
import PropertySearch from '../Components/Pages/PropertySearch ';
import WhyUse from '../Components/Pages/WhyUse';
import Business from '../Components/Pages/Business ';
import Testimonials from '../Components/Pages/Testimonials';
import FindANewHome from '../Components/Pages/FindANewHome';
// import Available from '../Components/Pages/Available';
import Services from '../Components/Pages/Services';
import Footer from '../Components/Pages/Footer';
import ForgotPassword from '../Components/Pages/ForgotPassword';
import GoogleCallback from '../Components/GoogleCallback';
import SellorRentProperty from '../Components/Pages/SellorRentProperty';
import PropertyDetailsRent from '../Components/Pages/PropertyDetailsRent';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path='/auth/google/callback' element={GoogleCallback} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path="/postaboutroom" element={<PostFlat />} />
                <Route path="/list-your-property-for-rent-sale" element={<SellorRentProperty />} />
                <Route path='/property/manage/rent' element={<PropertyDetailsRent />} />
            </Routes>
            <ConditionalCarousel />
        </Router>
    );
};

const ConditionalCarousel = () => {
    const location = useLocation();

    // Show Carousel only on the home route or other specific routes
    if (location.pathname === '/') {
        return (
            <>
                <PropertySearch />
                <Room />
                <WhyUse />
                <Business />
                <Testimonials />
                <FindANewHome />
                {/* <Available /> */}
                <Services />
                <Footer />
                {/* <LookingFor /> */}
                {/* <Reviews /> */}
            </>
        );
    }

    return null;
};

export default AppRouter;
