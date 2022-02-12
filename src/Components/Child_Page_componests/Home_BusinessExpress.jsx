import React, { Component } from "react";
import pic from "../Image/pic.png";
import amit from "../Image/amit.png";
import signature from "../Image/signature.png";

export default class Home_BusinessExpress extends Component {
  render() {
    return (
      <section id="business_expertise">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <figure>
                <img class="img-fluid" src={pic} alt="" />
              </figure>
            </div>
            <div class="col-lg-6">
              <hgroup>
                <h2>
                  Our business experties Provide <br />
                  you the great value
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, vix an natum labitur eleifend, mel
                  amet a great laorit menandri. Ei justo complectitur duo. Ei
                  mundi solet ut soletu mel possit quo. Sea cu justo laudem.{" "}
                 
                  An utinam consulatu eos, est facilis suscipiantur te, vim te
                  iudico delenit voluptatibus. Te eos accusam repudiandae.
                </p>
              </hgroup>
              <div class="id">
                <div>
                  <img class="person img-fluid" src={amit} alt="" />
                </div>
                <div class="d-flex">
                  <div>
                    <h2>Amit Biswas</h2>
                    <p>CEO & Founder of AmitJS.Com</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
