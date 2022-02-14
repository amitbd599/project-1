import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default class _About_CardItems extends Component {
  render() {
    const { name, position, des, img } = this.props.data;
    return (
     
      <div class="card myCard">
        <img class="card-img-top" src={img} alt="Card image cap" />
        <div class="">
          <h4 class="card-title">{name}</h4>
          <h5>{position}</h5>
          <p class="card-text">{des}</p>
          <hr />
          <span class="social">
            <a href="#">
              {" "}
             <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a href="#">
              {" "}
              <FaTwitterSquare></FaTwitterSquare>
            </a>
            <a href="#">
             <FaLinkedin></FaLinkedin>
            </a>
            <a href="#">
             <FaInstagram></FaInstagram>
            </a>
          </span>
        </div>
      </div>
        
    );
  }
}
