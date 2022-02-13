import React, { Component } from 'react'

export default class _TeamData extends Component {
  render() {

    const {name, position, des, img}=this.props.data;
    return (
        <div class="col-lg-3 col-md-6 part-1">
        <div class="card-item">

            <figure>
                <img class="card-img-top img-fluid" src={img} alt="Card image cap"/>
                <div class="overlay"></div>
            </figure>

            <div class="card-body-item">

                <h4 class="card-title">{name}</h4>
                <h5>{position}</h5>
                <p class="card-text">{des}</p>
                <hr/>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

        </div>
    </div>
    )
  }
}
