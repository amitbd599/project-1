import React, { Component } from "react";

import Carousel from "react-elastic-carousel";
import quote from "../Image/icon/left-quote.png";
import author_1 from "../Image/amit.png";
import author_2 from "../Image/amit2.png";
import author_3 from "../Image/amit3.png";
import _Home_WhyChoose from "./_Home_WhyChoose";

export default class Home_Feedback extends Component {
  render() {
    return (
      <section id="feedback-chose">
        <div class="container-fluid">
          <div class="row">
            <div class=" col-lg-6 part-1" id="">
              <hgroup class="mt-100 ml-80 boost">
                <h2 class="mb-30">Client Feedback</h2>
                <img class="mb-30 feed" src={quote} alt="" />
                <div class="bd-example">
                  <Carousel itemsToShow={1}>
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div class="slider-div"></div>
                        <div class="carousel-caption  d-md-block">
                          <p class="text-full">
                            Bonsi business consulting allows me the opportunity
                            to hear directly from my customer. Sometimes
                            allowing client like me the opportunity to respond
                            to a problem while they are still in the building
                          </p>

                          <hr />
                          <div className="d-lg-flex d-md-block">
                            <img
                              class="img-fluid float-left"
                              src={author_1}
                              alt=""
                            />
                            <div>
                              <h3>Amit Biswas</h3>
                              <p class="text">CEO - amitjs.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div class="slider-div"></div>
                        <div class="carousel-caption  d-md-block">
                          <p class="text-full">
                            Bonsi business consulting allows me the opportunity
                            to hear directly from my customer. Sometimes
                            allowing client like me the opportunity to respond
                            to a problem while they are still in the building
                          </p>

                          <hr />
                          <div className="d-lg-flex d-md-block">
                            <img
                              class="img-fluid float-left"
                              src={author_2}
                              alt=""
                            />
                            <div>
                              <h3>Bina Biswas</h3>
                              <p class="text">Director - amitjs.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div class="slider-div"></div>
                        <div class="carousel-caption  d-md-block">
                          <p class="text-full">
                            Bonsi business consulting allows me the opportunity
                            to hear directly from my customer. Sometimes
                            allowing client like me the opportunity to respond
                            to a problem while they are still in the building
                          </p>

                          <hr />
                          <div className="d-lg-flex d-md-block">
                            <img
                              class="img-fluid float-left"
                              src={author_3}
                              alt=""
                            />
                            <div>
                              <h3>Ritu Das</h3>
                              <p class="text">UI Designer - amitjs.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </hgroup>
            </div>
            <div class=" col-lg-6 part-2">
              <div class="why-choose">
                <hgroup>
                  <h2>Why Choose Us :</h2>

                  <_Home_WhyChoose
                    title="Trsuted Vendor"
                    des="Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily."
                  ></_Home_WhyChoose>
                  <_Home_WhyChoose
                    title="Professional Advisor"
                    des="Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily."
                  ></_Home_WhyChoose>
                  <_Home_WhyChoose
                    title="Award’s Winner"
                    des="Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily."
                  ></_Home_WhyChoose>
                </hgroup>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
