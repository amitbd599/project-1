import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";

export default class Contact extends Component {
  render() {
    return (
      <>
        {/* Header */}

        <Header></Header>

        {/* Page Name */}

        <PageName name="Contact"></PageName>

        {/* Page Link */}

        <PageLink name="Contact"> </PageLink>

        {/* <!-- Service Card --> */}

        <section id="contact-part-1">
          <div class="container">
            <div class="row part-1">
              <div class="col text-center">
                <p>
                  Thank you for your interest in The Abraham Group. Please fill
                  out the form below to ask a question, leave a statement or to
                  report a technical problem and we will get back to you at our
                  earliest convenience.
                </p>
              </div>
            </div>
            <div class="row part-2">
              <div class="col-lg-4">
                <hgroup class="text-center">
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <h3>Our Address</h3>
                  <p>
                    60 Grant Ave. Central New <br />
                    Road 0708, UK
                  </p>
                </hgroup>
              </div>
              <div class="col-lg-4">
                <hgroup class="text-center">
                  <span>
                    <i class="fas fa-at"></i>
                  </span>
                  <h3>Phone & Email</h3>
                  <p>
                    (+98) 52451256 <br />
                    iadmin@gmail.com
                  </p>
                </hgroup>
              </div>
              <div class="col-lg-4">
                <hgroup class="text-center">
                  <span>
                    <i class="fas fa-share-alt-square"></i>
                  </span>
                  <h3>Stay In Touch</h3>
                  <p>Also find us on social Media</p>
                  <div class="social">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </hgroup>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- location part --> */}

        <section id="contact-location-part">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 part-1">
                <hgroup>
                  <h2>Location Map</h2>
                </hgroup>
                <div id="googleMap">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/eAuDNXK.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-8 part-2">
                <hgroup>
                  <div class="contact-box">
                    <h2>Contact Us</h2>
                    <form class="form-inline mt-40">
                      <label class="sr-only" for="inlineFormInputName2">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control mb-20  me-2 md-me-0"
                        id="inlineFormInputName2"
                        placeholder="First Name*"
                      />
                      <label class="sr-only" for="inlineFormInputName2">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control mb-20 ms-0 md-ms-2 "
                        id="inlineFormInputName2"
                        placeholder="Last Name*"
                      />
                      
                      <label class="sr-only" for="inlineFormInputName2">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control mb-20 mr-sm-2 website"
                        id="inlineFormInputName2"
                        placeholder="Website"
                      />

                      <textarea
                        class="form-control mb-30 textarea"
                        rows="6"
                        cols="50"
                        name="comment"
                        form="usrform"
                      >
                        Enter text here...
                      </textarea>

                      <div>
                        <button type="submit" class="btn btn-primary mb-20">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </hgroup>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logo */}

        <Home_LogoSection></Home_LogoSection>

        {/* Footer Section */}

        <Footer></Footer>
      </>
    );
  }
}
