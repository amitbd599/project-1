import React, { Component } from 'react'
import Footer from '../Child_Page_componests/Footer'
import Header from '../Child_Page_componests/Header'
import Header_HeroSection from '../Child_Page_componests/Header_HeroSection'
import Home_BlogSection from '../Child_Page_componests/Home_BlogSection'
import Home_BusinessExpress from '../Child_Page_componests/Home_BusinessExpress'
import Home_CountSection from '../Child_Page_componests/Home_CountSection'
import Home_DiscoverSection from '../Child_Page_componests/Home_DiscoverSection'
import Home_Feedback from '../Child_Page_componests/Home_Feedback'

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

        <Footer></Footer>
      </div>
    )
  }
}
