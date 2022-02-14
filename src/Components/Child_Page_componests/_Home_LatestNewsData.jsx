import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class _Home_LatestNewsData extends Component {

  render() {
    const {title, picture, date, des}= this.props.data;

    return (
        <div class="col-lg-3 col-md-6">
        <div class="card">
            <img class="card-img-top img-fluid" src={picture} alt="Card image cap"/>
            <span class="date">{date}</span>
            <div class="card-body">
                <p>Posted By <Link><span>Amit Biswas.</span></Link></p>
                <Link to={''}><h4 class="card-title">{title}</h4></Link>
                <p class="card-text">
                   {des.slice(0,100)}
                </p>
                <Link className='' to={''}>More Details &#8594;</Link>
            </div>
        </div>
    </div>
    )
  }
}
