import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Header_HeroSection from "../Child_Page_componests/Header_HeroSection";
import Home_BlogSection from "../Child_Page_componests/Home_BlogSection";
import Home_BusinessExpress from "../Child_Page_componests/Home_BusinessExpress";
import Home_ContactSection from "../Child_Page_componests/Home_ContactSection";
import Home_CountSection from "../Child_Page_componests/Home_CountSection";
import Home_DiscoverSection from "../Child_Page_componests/Home_DiscoverSection";
import Home_Feedback from "../Child_Page_componests/Home_Feedback";
import Home_LatestNews from "../Child_Page_componests/Home_LatestNews";
import Home_LatestWork from "../Child_Page_componests/Home_LatestWork";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import Home_PurchaseSection from "../Child_Page_componests/Home_PurchaseSection";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* Header Section */}

        <Header></Header>

        {/* Hero Section */}

        <Header_HeroSection></Header_HeroSection>

        {/* Home Blog */}

        <Home_BlogSection></Home_BlogSection>

        {/* Discover section */}

        <Home_DiscoverSection></Home_DiscoverSection>

        {/* Business Express */}

        <Home_BusinessExpress></Home_BusinessExpress>

        {/* Count Section */}

        <Home_CountSection></Home_CountSection>

        {/* Feedback section */}

        <Home_Feedback></Home_Feedback>

        {/* Latest Working section */}

        <Home_LatestWork></Home_LatestWork>

        {/* Latest News Section */}

        <Home_LatestNews></Home_LatestNews>

        {/* Purchase section */}

        <Home_PurchaseSection></Home_PurchaseSection>

        {/* Contact */}

        <Home_ContactSection></Home_ContactSection>

        {/* Company Logo */}

        <Home_LogoSection></Home_LogoSection>

        {/* Footer Section */}
        
        <Footer></Footer>
      </div>
    );
  }
}
