import React, { Component } from 'react'

import quote from "../Image/icon/quote.png";

export default class _About_ClientReview extends Component {
  render() {
      const {name, position, des}=this.props;
    return (
        <div class="carousel-slider  ">
            <span>
              <img src={quote} alt="" />
            </span>
            <h2 className="text-white my-2">What Client Say</h2>
            <p className="text-white">
             {des}
            </p>
            <hr />
            <h5 className="text-white">{name}</h5>
            <p className="text-white ">{position}</p>
          </div>
    )
  }
}
