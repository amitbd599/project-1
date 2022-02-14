import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import share from '../Image/icon/share.png'

export default class PageLink extends Component {
  render() {
      const {name}= this.props;
    return (
        <section id="pageLink">
        <div class="container">
            <div class="row">
                <div class="col-6 part-1">
                    <Link to={'/'} >Home</Link> <span> {'>'} </span> <p className='d-inline-block'>{name}</p>
                </div>
                <div class="col-6 part-2 ">
                    <span class="shear"><img src={share} alt=""/>
                        <a href="#">SHARE</a>
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
