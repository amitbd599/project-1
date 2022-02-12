import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class _Project_Data extends Component {
    render() {
        const {position, data, picture}=this.props.data;
        return (
            <div class="col-md-4">
            <div class="card my-3">
                <img class="card-img" src={picture} alt="Card image"/>
                <div class="card-img-overlay text-center">
                    <h3>{data}</h3>
                    <h2>{position}</h2>
                    <Link to={'./single-project'}><i class="fas fa-arrow-right"></i></Link>
                   
                </div>
              </div>
           </div>
        );
    }
}

export default _Project_Data;