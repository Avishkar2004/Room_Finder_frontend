import React, { useEffect } from 'react';
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
import ConfirmationRent from '../Components/Pages/confirmationRent';
import PropertyDetailsRent from '../Components/Pages/ResidentialRent/PropertyDetailsRent';
import PropertyDetailsResale from '../Components/Pages/ResidentialReSale/PropertyDetailsResale';
import PropertyDetailsPg from '../Components/Pages/Pg/PropertyDetailsPg';
import PropertyDetailsFlatmate from '../Components/Pages/ResidentialFlatmate/PropertyDetailsFlatmate';

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}


const AppRouter = () => {
    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path='/auth/google/callback' element={GoogleCallback} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path="/postaboutroom" element={<PostFlat />} />
                <Route path="/list-your-property-for-rent-sale" element={<SellorRentProperty />} />
                <Route path='/property/resident/rent' element={<PropertyDetailsRent />} />
                <Route path='/property/resident/resale' element={<PropertyDetailsResale />} />
                <Route path="/property/resident/pg/hostel" element={<PropertyDetailsPg />} />
                <Route path="/property/resident/flatmates" element={<PropertyDetailsFlatmate />} />
                <Route path="/confirmation-rent" element={<ConfirmationRent />} />
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
