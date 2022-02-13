import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import _Project_Data from "../Child_Page_componests/_Project_Data";
import _Single_Page_Project_solution from "../Child_Page_componests/_Single_Page_Project_solution";

class Single_Project extends Component {
  render() {
    return (
      <>
        {/* Header section */}

        <Header></Header>

        {/* Page Name */}

        <PageName name="Single Project"></PageName>

        {/* Page Link */}

        <PageLink name="Single Project"> </PageLink>

        {/* <!-- Left Section --> */}

        <section id="singleProject-left-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 item-1">
                <img
                  class="img-fluid"
                  src="https://i.imgur.com/2fDtHeG.png"
                  alt=""
                />
                <hgroup class="part-1">
                  <h2>Business & Marketing Growth</h2>
                  <p class="text-1">
                    We’ll be with you on every walk of life to identify new
                    opportunities.
                  </p>
                  <hr />
                  <p class="text-2">
                    Lorem ipsum dolor sit amet, vix an natum labitur eleifend,
                    mel amet a laorit menandri. Ei justo complectitur duo. Ei
                    mundi solet ut soletu mel possit quo. Sea cu justo laudem.
                    An utinam consulatu eos, est facilis suscipiantur te, vim te
                    iudico delenit voluptatibus. Te eos accusam repudiandae
                    eros. survival strategies to ensure proactive domination. At
                    the end of the day, going forward, a new normal that has
                    evolved from generation. That is on the runway heading
                    towards a streamlined cloud solution.
                  </p>
                </hgroup>

                <hgroup class="part-2">
                  <h2 class="head-text">Project Solution</h2>
                  <div class="collapse-file">
                    <div id="accordion">
                      <div class="card">
                        <div class="card-header" id="headingOne">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Our Approch
                            </button>
                          </h5>
                        </div>

                        <div class="card-header" id="headingTwo">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Our Approch
                            </button>
                          </h5>
                        </div>

                        <div class="card-header" id="headingThree">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Solution & Result
                            </button>
                          </h5>
                        </div>
                      </div>

                      {/* Project Data */}

                      <_Single_Page_Project_solution></_Single_Page_Project_solution>


                    </div>
                  </div>
                </hgroup>
              </div>
              <div class="col-lg-3 item-2">
                <img class="" src="https://i.ibb.co/qCBftwK/banner-2.png" alt="" />
                <hgroup>
                  <h2>Project Details</h2>
                  <p class="text">
                    Nemore tincidunt ea mel, eos cu alii insolens signiferumq.
                    Temu nec dolor clita partem mea ne iuvaret aliquid. Id
                    namillum aug commodo, diam dolores philosophia.Et iudibit
                    theophras signiferumque vis. Ne stet adolescens efficiendi
                    te pri. Et nec natum inciderint, eos ex gubergren
                  </p>
                  <h3>What was included in the project</h3>
                  <div class="date_n">
                    <p>
                      {" "}
                      <b>Date :</b> 12 Mar, 2016
                    </p>
                    <p>
                      <b>Categories :</b> Finance & Legal
                    </p>
                    <p>
                      <b>Tag :</b> Financial Advise.
                    </p>
                    <p>
                      <b>Location : </b>New Yrok, NY
                    </p>
                  </div>
                </hgroup>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <Home_LogoSection></Home_LogoSection>

        {/* Footer Section */}

        <Footer></Footer>
      </>
    );
  }
}

export default Single_Project;
