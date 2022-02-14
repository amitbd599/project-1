import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import logo_1 from "../Image/smartea-1.png";
import logo_2 from "../Image/smartea-2.png";
import logo_3 from "../Image/smartea-3.png";
import logo_4 from "../Image/smartea20-13.png";

export default class Home_LogoSection extends Component {
  render() {
    return (
      <section id="company_logo">
        <div class="">
          <div class="row">
            <Marquee gradient={false}>
              <div class="col-lg-3 col-sm-6  logo">
                <img class="img-fluid" src={logo_1} alt="" />
              </div>
              <div class="col-lg-3 col-sm-6 logo">
                <img src={logo_2} alt="" />
              </div>
              <div class="col-lg-3 col-sm-6 logo">
                <img src={logo_3} alt="" />
              </div>
              <div class="col-lg-3 col-sm-6 logo">
                <img src={logo_4} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    );
  }
}
