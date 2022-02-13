import React, { Component } from 'react'

export default class _About_CardItems extends Component {
  render() {
      const {title,position, des, img}=this.props;
    return (
        <div class="col-lg-3 col-md-6">
        <div class="card">
            <img class="card-img-top" src={img} alt="Card image cap"/>
            <div class="">
                <h4 class="card-title">{title}</h4>
                <h5>{position}</h5>
                <p class="card-text">
                    {des}
                </p>
                <hr/>
                <span class="social">
                    <a href="#"> <i class="fab fa-facebook-square"></i></a>
                    <a href="#"> <i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                </span>
            </div>
        </div>
    </div>
    )
  }
}
