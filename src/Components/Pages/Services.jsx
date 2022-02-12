import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import _Service_Card from "../Child_Page_componests/_Service_Card";

export default class Services extends Component {
  render() {
    return (
      <>
        {/* Header */}

        <Header></Header>

        {/* Page Name */}

        <PageName name="Services"></PageName>

        {/* Page Link */}

        <PageLink name="Services"> </PageLink>

        {/* Service Card */}

        <_Service_Card></_Service_Card>

        {/* Logo */}

        <Home_LogoSection></Home_LogoSection>

        {/* Footer Section */}
        
        <Footer></Footer>
      </>
    );
  }
}
