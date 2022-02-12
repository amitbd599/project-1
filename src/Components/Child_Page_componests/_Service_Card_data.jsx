import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class _Service_Card_data extends Component {
  render() {
    const {title, des, picture}=this.props.data;
    
    return (
      
            <div class="col-lg-4 col-md-6 part-6 bottom">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src={picture}
                  alt="Card image cap"
                />
                <div class="overylay"></div>

                <div class="card-body">
                  <h4 class="card-title"> {title}</h4>
                  <p class="card-text">
                    {des}
                  </p>

                  <Link to={'./service-details'}>More Details &#8594;</Link>
                 
                </div>
                <div class="new_border"></div>
              </div>
            </div>
         
    );
}
}