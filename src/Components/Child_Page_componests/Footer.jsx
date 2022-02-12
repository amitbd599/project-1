import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <section id="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 part-1">
                <a href="#">
                  {" "}
                  <img
                    class="img-fluit"
                    src="./img/Component 1 – 1.png"
                    alt=""
                  />
                </a>
                <p>
                  Bonsi is a global consulting firm with a twist. We bring big
                  ideas and challenge the norm. We work with our clients, not at
                  them.
                </p>
                <fieldset>
                  <label class="sr-only" for="inlineFormInputGroupUsername2">
                    Username
                  </label>
                  <div class="input-group mb-20">
                    <input
                      type="text"
                      class="form-control more-1"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Enter Your Email"
                    />

                    <div class="input-group-prepend">
                      <a class="input-group-text" href="#">
                        {" "}
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-lg-3 col-md-6 part-2 ">
                <hgroup>
                  <h2>Quick Links</h2>
                  <ul>
                    <li class="pb-10">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Terms & Condition</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Support</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </hgroup>
              </div>
              <div class="col-lg-3 col-md-6 part-2 part-3">
                <hgroup>
                  <h2>Information</h2>
                  <ul>
                    <li class="pb-10">
                      <a href="#">About us</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Customer</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Service</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Collection</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">Blog</a>
                    </li>
                    <li class="pb-10">
                      <a href="#">BestSellers</a>
                    </li>
                  </ul>
                </hgroup>
              </div>
              <div class="col-lg-3 col-md-6 part-2 part-4">
                <hgroup>
                  <h2>Information</h2>
                  <div class="mb-10">
                    <i class="fas fa-map-marker-alt"></i>
                    <p class="ml-30 text">
                      60 Grant Ave. Central New Road 0708, UK
                    </p>
                  </div>
                  <div class="mb-10">
                    <span class="mr-10">
                      <i class="fas fa-phone-alt"></i>
                    </span>
                    <span class="text">+880 1723 801 729</span>
                  </div>
                  <div class="mb-10">
                    <span class="mr-10">
                      <i class="far fa-envelope"></i>
                    </span>
                    <span class="text">admin@getmore7.com</span>
                  </div>
                  <div class="social">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
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
        <section id="footer-mini">
          <div class="container">
            <div class="row">
              <div class="col-md-4 part-1">
                <p>
                  © 2021{" "}
                  <b>
                    {" "}
                    <a href="https://getmore7.com/">getmore7.com</a>{" "}
                  </b>
                  || All Rights Reserved.{" "}
                </p>
              </div>
              <div class="col-md-4 part-1">
                <p>
                  {" "}
                  Design credit{" "}
                  <a href="https://www.linkedin.com/in/amitgoclick/">
                    Amit Biswas
                  </a>{" "}
                </p>
              </div>
              <div class="col-md-4 part-2">
                <div class="look float-right">
                  <a href="#">About Us </a>||
                  <a href="#">FAQ’s </a>||
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
