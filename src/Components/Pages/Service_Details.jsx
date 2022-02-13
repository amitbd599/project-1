import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import icon from "../Image/service-details/icon.png";
import logo from "../Image/service-details/logo.png";

export default class Service_Details extends Component {
  render() {
    return (
      <>
        {/* Header */}

        <Header></Header>

        {/* Page Name */}

        <PageName name=" Service Details"></PageName>

        {/* Page Link */}

        <PageLink name=" Service Details"> </PageLink>

        {/* <!-- Service Details Option --> */}

        <section id="Service_Details_Option">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 part-1">
                <div class="list_group">
                  <ul class="mb-5">
                    <li class="mb-5 active">
                      <i class="fas fa-dot-circle"></i>
                      <a href="#"> Financial Advise</a>
                    </li>
                    <li class="mb-5">
                      <i class="fas fa-dot-circle"></i>
                      <a href="#"> Market Research</a>
                    </li>
                    <li class="mb-5">
                      <i class="fas fa-dot-circle"></i>
                      <a href="#"> Sales & Trading</a>
                    </li>
                    <li class="mb-5">
                      <i class="fas fa-dot-circle"></i>
                      <a href="#"> Performance & Growth</a>
                    </li>
                    <li class="mb-5">
                      <i class="fas fa-dot-circle"></i>
                      <a href="#"> Consulting</a>
                    </li>
                    <li class="mb-5">
                      <i class="fas fa-dot-circle"></i>
                      <a href="#"> Immigration Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-9 part-2">
                <div class="overlay"></div>
                <hgroup>
                  <h2>
                    Our business experties Provide <br />
                    you the great value
                  </h2>
                  <p>
                    Here will some subtite with dosis alter seeker levegre
                    agilee framwork provide high level overviews.
                  </p>
                  <span>
                    <button class="btn-1 mr-20">
                      <a href="#">Sing Up..</a>
                    </button>
                    <button class="btn-2">
                      <a href="#">More Service</a>
                    </button>
                  </span>
                </hgroup>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Client Review & Details.. --> */}

        <section id="Service_Details_ClientReview_Details">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="bd-example">
                  <div
                    id="review_client"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <ol class="carousel-indicators">
                      <li
                        data-target="#review_client"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li data-target="#review_client" data-slide-to="1"></li>
                      <li data-target="#review_client" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div class="slider"></div>
                        <div class="carousel-caption ">
                          <img
                            src="https://i.ibb.co/vms6Lzy/girl-2.png"
                            alt=""
                          />
                          <h3>Jasmin Rose</h3>
                          <h4>Founder of Innovate</h4>
                          <p>
                            Leverage agile framework to the provide a robust
                            synoce for high level overviews.
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="slider"></div>
                        <div class="carousel-caption ">
                          <img
                            src="https://i.ibb.co/V3v42vC/girl-3.png"
                            alt=""
                          />
                          <h3>Maria Doni</h3>
                          <h4>Founder of Innovate</h4>
                          <p>
                            Leverage agile framework to the provide a robust
                            synoce for high level overviews.
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="slider"></div>
                        <div class="carousel-caption ">
                          <img
                            src="https://i.ibb.co/QNh8nh0/girl-1.png"
                            alt=""
                          />
                          <h3>NM. Nihati R.</h3>
                          <h4>Founder of Innovate</h4>
                          <p>
                            Leverage agile framework to the provide a robust
                            synoce for high level overviews.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#review_client"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#review_client"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 part-2">
                <hgroup class="item-1">
                  <h2>Increase Your Business Profit</h2>
                  <p>
                    Here will some subtite with dosis alter seeker levegre
                    agilee framwork provide high level overviews.
                  </p>
                </hgroup>
                <hgroup class="item-2">
                  <p>
                    I have always wanted to have a neighbor just like you. I've
                    always wanted to live in a neighbor with you. That's just
                    little bit more than the law will allow. All of them had
                    hair of gold like their mother the youngest one in curlsThe
                    movie star the professor and Mary Ann here on Gilligans
                    Isle., Well the first thing you know ol' Jeds a millionaire.
                  </p>

                  <div class="top">
                    <div class="inner-item part-1">
                      <span>
                        <img src={icon} alt="" />
                      </span>
                      <h3>Best Result</h3>
                      <p>Proven results in competitive markets</p>
                    </div>
                    <div class="inner-item part-2 pt-15">
                      <span>
                        <img src={icon} alt="" />
                      </span>
                      <h3>Fastes Process</h3>
                      <p>Unrivalled levels of service</p>
                    </div>
                    <div class="inner-item part-3 pt-15">
                      <span>
                        <img src={icon} alt="" />
                      </span>
                      <h3>Real Time Analyzing</h3>
                      <p>Real metrics - no marketing fluff!</p>
                    </div>
                  </div>
                </hgroup>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Incluid_servic --> */}

        <section id="Service_Details_Incluid_service">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 part-1">
                <div class="pdf">
                  <span>
                    <i class="far fa-file-pdf"></i>
                  </span>
                  <a class="text" href="#">
                    DetailsBrochure.pdf
                  </a>
                </div>
                <div class="adds">
                  <img class="img-fluid" src={logo} alt="" />
                  <p>
                    I have always wanted to have a neighbor just like you. I've
                    always wanted to live in a neighbor with you.
                  </p>

                  <a class="btn" href="#">
                    {" "}
                    Get Links{" "}
                  </a>
                </div>
              </div>
              <div class="col-lg-9 part-2">
                <hgroup>
                  <h3>What Include in the Service?</h3>
                  <p>
                    I have always wanted to have a neighbor just like you. I've
                    always wanted to live in a neighbor with you. Makin their
                    way the only way they know how. That's just little bit more
                    than the law will allow ll of them had hair of gold like
                    their mother the youngest one in curls. The movie star the
                    professor and Mary Ann here on Gilligans Isle., Well the
                    first thing you know ol' Jeds a millionaire.
                  </p>
                </hgroup>
                <div class="main">
                  <div class="item-1">
                    <span>
                      <i class="fas fa-search-plus"></i>
                    </span>
                    <div class="text-file">
                      <h3>Market Research</h3>
                      <p>
                        Looking cautiously round, to ascertain that they were
                        not.
                      </p>
                    </div>
                  </div>
                  <div class="item-1">
                    <span>
                      <i class="fab fa-accessible-icon"></i>
                    </span>
                    <div class="text-file">
                      <h3>Market Value</h3>
                      <p>
                        Looking cautiously round, to ascertain that they were
                        not.
                      </p>
                    </div>
                  </div>
                  <div class="item-1">
                    <span>
                      <i class="fab fa-alipay"></i>
                    </span>
                    <div class="text-file">
                      <h3>Market Sales</h3>
                      <p>
                        Looking cautiously round, to ascertain that they were
                        not.
                      </p>
                    </div>
                  </div>
                  <div class="item-1">
                    <span>
                      <i class="fab fa-amilia"></i>
                    </span>
                    <div class="text-file">
                      <h3>Marketing Ads</h3>
                      <p>
                        Looking cautiously round, to ascertain that they were
                        not.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Answer */}

        <section id="Service_Details_Frequently_Asked_Question">
          <div class="container">
            <div class="row">
            
              <div class="col-md-3 part-1"></div>
              <div class="col-md-9 part-2">
              <h2>Frequently Asked Question</h2>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="">
                    <Accordion.Header>
                      How i get the free consulting and start with advisor?
                    </Accordion.Header>
                    <Accordion.Body>
                      We also ensure that the whole team is included in process
                      and that no one is left out during the turnaround. The
                      most crucial part ensuring some degree financialstability
                      during the turnaround. Nemore tincidunt ea mel, eos cu
                      alii insolens signiferumque. Te nec dolor clita partem,
                      mea ne iuvaret aliquid. Id nam illum augue commodo, diam
                      dolores philosophia nec.Ne stet adolescens efficiendi te
                      pri. Et nec natum inciderint, eos ex gubergren Nemore
                      tincidunt ea mel, eos cu alii insolens signiferumque. Te
                      nec dolor clita partem, mea ne iuvaret aliquid. Id nam
                      illum augue commodo, diam dolores philosophia nec. Ne stet
                      adolescens efficiendi te pri. Et nec natum inciderint, eos
                      ex gubergren
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How i get the free consulting and start with advisor?</Accordion.Header>
                    <Accordion.Body>
                    We also ensure that the whole team is included in process
                      and that no one is left out during the turnaround. The
                      most crucial part ensuring some degree financialstability
                      during the turnaround. Nemore tincidunt ea mel, eos cu
                      alii insolens signiferumque. Te nec dolor clita partem,
                      mea ne iuvaret aliquid. Id nam illum augue commodo, diam
                      dolores philosophia nec.Ne stet adolescens efficiendi te
                      pri. Et nec natum inciderint, eos ex gubergren Nemore
                      tincidunt ea mel, eos cu alii insolens signiferumque. Te
                      nec dolor clita partem, mea ne iuvaret aliquid. Id nam
                      illum augue commodo, diam dolores philosophia nec. Ne stet
                      adolescens efficiendi te pri. Et nec natum inciderint, eos
                      ex gubergren
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>How i get the free consulting and start with advisor?</Accordion.Header>
                    <Accordion.Body>
                    We also ensure that the whole team is included in process
                      and that no one is left out during the turnaround. The
                      most crucial part ensuring some degree financialstability
                      during the turnaround. Nemore tincidunt ea mel, eos cu
                      alii insolens signiferumque. Te nec dolor clita partem,
                      mea ne iuvaret aliquid. Id nam illum augue commodo, diam
                      dolores philosophia nec.Ne stet adolescens efficiendi te
                      pri. Et nec natum inciderint, eos ex gubergren Nemore
                      tincidunt ea mel, eos cu alii insolens signiferumque. Te
                      nec dolor clita partem, mea ne iuvaret aliquid. Id nam
                      illum augue commodo, diam dolores philosophia nec. Ne stet
                      adolescens efficiendi te pri. Et nec natum inciderint, eos
                      ex gubergren
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Company */}

        <Home_LogoSection></Home_LogoSection>

        {/* Footer */}

        <Footer></Footer>
      </>
    );
  }
}
