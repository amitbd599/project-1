import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class Home_ContactSection extends Component {
  render() {
    return (
      <section id="Message">
        <div class="container">
          <div class="row">
            <div class="col-md-6 part-1">
              <hgroup>
                <h6>Request</h6>
                <h2>Free Consultation</h2>
                <p>
                  Any kind of business, finance & consultion don’t hesitate to
                  contact with us for imiditate & quick customer support. We are
                  love to hear from you
                </p>
                <h3>
                  Call Us{" "}
                  <span class="text"> for imiditate support this number </span>
                </h3>
                <span class="number">+880 876 65 455</span>
              </hgroup>
            </div>
            <div class="col-md-3 part-2">
              <div class="mass">
                <h2>Drop Your Message</h2>
                <form class="form-inline">
                  <label class="sr-only" for="inlineFormInputName2">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control mb-20"
                    id="inlineFormInputName2"
                    placeholder="User Name *"
                  />

                  <label class="sr-only" for="inlineFormInputGroupUsername2">
                    User Name
                  </label>
                  <div class="input-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Email Id *"
                    />
                  </div>

                  <label class="sr-only" for="inlineFormInputGroupUsername2">
                    Username
                  </label>
                  <div class="input-group mb-20">
                    <Form.Select aria-label="Default select example">
                      <option>Country</option>
                      <option value="1">USA</option>
                      <option value="2">BD</option>
                      <option value="3">UK</option>
                    </Form.Select>
                  </div>

                  <button type="submit" class="btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-3 part-3">
              <form class="form-inline">
                <label class="sr-only" for="inlineFormInputName2">
                  Name
                </label>

                <textarea
                  type="text"
                  class="form-control mb-20"
                  id="inlineFormInputName2"
                  rows="6"
                  cols="50"
                  placeholder="Your Message*"
                >
                  Your Message*
                </textarea>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
