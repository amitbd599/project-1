import React, { Component } from "react";
import Header from "../Child_Page_componests/Header";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import signature from "../Image/signature.png";
import amit from "../Image/amit.png";
import myImg from "../Image/my.jpg";
import icon_1 from "../Image/icon/icon-1.png";
import icon_2 from "../Image/icon/icon-2.png";
import icon_3 from "../Image/icon/icon-3.png";
import _AboutMarketingTips from "../Child_Page_componests/_AboutMarketingTips";
import _About_CardItems from "../Child_Page_componests/_About_CardItems";
import Carousel from "react-elastic-carousel";
import _About_ClientReview from "../Child_Page_componests/_About_ClientReview";
import Home_ContactSection from "../Child_Page_componests/Home_ContactSection";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import Footer from "../Child_Page_componests/Footer";

export default class About extends Component {
  render() {
    return (
      <>
        {/* Header section */}

        <Header></Header>

        {/* Page name */}

        <PageName name="About Us"></PageName>

        {/* Page Link */}

        <PageLink name='About US'></PageLink>

        {/* Hero Section */}

        <section id="AboutHeroSection">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <hgroup>
                  <h2>
                    Our business experties Provide <br />
                    you the great value
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, vix an natum labitur eleifend,
                    mel amet a great laorit menandri. Ei justo complectitur duo.
                    Ei mundi solet ut soletu mel possit quo. Sea cu justo
                    laudem. <br />
                    <br />
                    An utinam consulatu eos, est facilis suscipiantur te, vim te
                    iudico delenit voluptatibus. Te eos accusam repudiandae.
                  </p>
                </hgroup>
                <div class="id">
                  <img class="person img-fluid" src={amit} alt="" />
                  <div class="mr-180 name">
                    <h2>Amit Biswas</h2>
                    <p>CEO & Founder of consul</p>
                  </div>

                  <img class="signature" src={signature} alt="" />
                </div>
              </div>
              <div class=" col-lg-6 d-none d-lg-block">
                <figure className="text-center">
                  <img class="img-fluid" src={myImg} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing tips */}

        <section id="about_Marketing_tips">
          <div class="container">
            <div class="row">
              <_AboutMarketingTips
                title="Management Consulting"
                des="We offer management consulting services, with
                            management and onground operational support, to help run your global operations"
                img={icon_1}
              ></_AboutMarketingTips>
              <_AboutMarketingTips
                title="Adnace Marketing"
                des="We offer management consulting services, with
                            management and onground operational support, to help run your global operations"
                img={icon_2}
              ></_AboutMarketingTips>
              <_AboutMarketingTips
                title="Effective Team Work"
                des="We offer management consulting services, with
                            management and onground operational support, to help run your global operations"
                img={icon_3}
              ></_AboutMarketingTips>
            </div>
          </div>
        </section>

        {/* <!-- Counter Items  --> */}

        <section id="about_counter">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <hgroup>
                  <h2>1500 +</h2>
                  <p>Completed Project</p>
                </hgroup>
              </div>
              <div class="col-lg-3 col-sm-6">
                <hgroup>
                  <h2>10 +</h2>
                  <p>Years Expereince</p>
                </hgroup>
              </div>
              <div class="col-lg-3 col-sm-6">
                <hgroup>
                  <h2>1920 +</h2>
                  <p>Expert Worker</p>
                </hgroup>
              </div>
              <div class="col-lg-3 col-sm-6">
                <hgroup>
                  <h2>30 +</h2>
                  <p>Award Winner</p>
                </hgroup>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Card items --> */}
        <section id="aboutCard">
          <div class="container">
            <div class="row part-1">
              <div class="col text-center">
                <h2>Executive Team</h2>
                <p>
                  This I have produced as a scantling of Jack’s great eloquence
                  and the force of his reasoning upon such abstruse matters
                </p>
              </div>
            </div>
            <div class="row part-2">
              <_About_CardItems
                title="Donna J. Murphy"
                position="Product Manager"
                img="https://i.ibb.co/D92rFFR/card-2.png"
                des="This much I thought proper to tell you in relation to yourself, and to the trust that
                                reposed in you."
              ></_About_CardItems>
              <_About_CardItems
                title="Jacqueline R. Collins"
                position="Metal caster"
                img="https://i.ibb.co/R3Vyp7s/card-3.png"
                des="This much I thought proper to tell you in relation to yourself, and to the trust that
                                reposed in you."
              ></_About_CardItems>
              <_About_CardItems
                title="Wanda M. Garcia"
                position="Executive chef"
                img="https://i.ibb.co/SQ0SDCL/card-4.png"
                des="This much I thought proper to tell you in relation to yourself, and to the trust that
                                reposed in you."
              ></_About_CardItems>
              <_About_CardItems
                title="Cindy G. Ward"
                position="Product Manager"
                img="https://i.ibb.co/6n5bmN8/card-1.png"
                des="This much I thought proper to tell you in relation to yourself, and to the trust that
                                reposed in you."
              ></_About_CardItems>
            </div>
          </div>
        </section>

        {/* ClientReview */}

        <div id="client_Review">
          <Carousel itemsToShow={1}>
            <_About_ClientReview
              name="Amit Biswas"
              position="COE AmitJs"
              des="Another really cool, unique thing they do? Each client story module links to the client's website, Facebook page, and app in both the Android and Apple app stores. Now that's loving your clients back."
            ></_About_ClientReview>
            <_About_ClientReview
              name="Moni Alex"
              position="UI Designer"
              des="Another really cool, unique thing they do? Each client story module links to the client's website, Facebook page, and app in both the Android and Apple app stores. Now that's loving your clients back."
            ></_About_ClientReview>
            <_About_ClientReview
              name="Laura T. Billington"
              des="Another really cool, unique thing they do? Each client story module links to the client's website, Facebook page, and app in both the Android and Apple app stores. Now that's loving your clients back."
              position="Production Manager elo"
            ></_About_ClientReview>

       
          </Carousel>
        </div>

        {/* Contsct Section */}

        <Home_ContactSection></Home_ContactSection>

        {/* Logo Section */}

        <Home_LogoSection></Home_LogoSection>


        {/* Footer section */}

        <Footer></Footer>
      </>
    );
  }
}
