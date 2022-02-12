import React, { Component } from "react";
import document from "../Image/document.png";
export default class _Home_WhyChoose extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <img class="img-fluid float-left mt-2" src={document} alt="" />
        <h3 className="mt-3">{this.props.title}</h3>
        <p>
     { this.props.des}
        </p>
      </div>
    );
  }
}
