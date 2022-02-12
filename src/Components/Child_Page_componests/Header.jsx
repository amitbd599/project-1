import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Image/Logo.png";

import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";

export default class Header extends Component {
  render() {
    const style = () => {
      return (
        <style jsx>{`
          .nav {
            transition: all 0.3s linear;
            height: 60px;
            z-index: 2000;
          }
          .scrollNav {
            transition: all 0.1s linear;
            z-index: 2000;
            height: 0;
          }
          .styl {
          }
        `}</style>
      );
    };
    return (
      <>
        {style()}

        <header id="header">
          <StickyNav length="20">
            <div class="topHead">
              <div className="container">
              <div class="row d-flex justify-content-between">
                <div class="col-md-6 part-1">
                  <span class="search_cart_up d-lg-none d-inline-block ml-20">
                    {" "}
                    <a href="#">
                      <i class="fas fa-search mr-25"></i>
                    </a>
                    <a href="#">
                      <img src="./img/Add-cart.png" alt="" />
                    </a>
                  </span>
                  <span class="phNo">
                    <i class="fas fa-phone-alt mr-15"></i>
                  </span>
                  <span class="phNo mr-15">880. 172. 3801. 729</span>
                  <span>
                    <i class="far fa-envelope mr-15"></i>
                  </span>
                  <span>admin@amitjs.com</span>
                </div>
                <div class="col-md-6 part-2">
                  <div class="ms-auto">
                    <span class="mr-50 d-none d-lg-inline ">
                      <a href="#">
                        {" "}
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        {" "}
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </span>
                    <button class="btn">
                      <a href="#">Get a Quote</a>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </StickyNav>

          {/* <!-- Navbar --> */}

          <div id="navBar" class="">
            <div class="container">
              <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to={"/"}>
                  <img src={logo} alt="" />
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                      <NavLink as={Link} to={'/'}>HOME</NavLink>
                      
                    </li>
                    <li class="nav-item">
                    <NavLink as={Link} to={'/about'}>ABOUT US</NavLink>
                      
                    </li>
                    <li class="nav-item">
                    <NavLink as={Link} to={'/service'}>SERVICES</NavLink>
                      
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        PAGES
                      </a>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        
                        <NavLink class="dropdown-item" as={Link} to={'/service-details'}>Service Details</NavLink>
                        <NavLink class="dropdown-item" as={Link} to={'/our-project'}> Our Project</NavLink>
                       
                        <a class="dropdown-item" href="single-project.html">
                          Single Project
                        </a>
                        <a class="dropdown-item" href="single-news.html">
                          Single News
                        </a>
                        <a class="dropdown-item" href="our-team.html">
                          Our Team
                        </a>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="our-news.html">
                        NEWS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                  <span class="search_cart_down">
                    {" "}
                    <a href="#">
                      <i class="fas fa-search mr-25"></i>
                    </a>
                    <a href="#">
                      <img src="./img/Add-cart.png" alt="" />
                    </a>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  }
}
