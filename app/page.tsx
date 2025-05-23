import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
{/* import Offer1 from "../components/Offer1"; // Adjust the import path as necessary  */}
import ProductCategories from "../components/ProductCategories";
import SupplierQuoteRequest from "../components/SupplierQuoteRequest";
import NewsletterSubscription from "../components/newsletter";

function HomePage() {

return (
    <Box>
        <HeroSection />
       {/* <Offer1 /> */}
        <ProductCategories header={'Featured Products'}/>
        {/* <SupplierQuoteRequest /> */}
       {/* <Offer1 /> */}
        <ProductCategories header={'Office Products'}/>
        <NewsletterSubscription />
    </Box>
);
};
export default HomePage;