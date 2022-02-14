import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class _News_Card extends Component {
  render() {
      const {date,title,des, picture}=this.props.data;
    return (
        <div class="card-point">
        <figure>
            <img class="img-fluid" src={picture} alt=""/>
            <span class="date">{date}</span>
        </figure>
        <hgroup>
            <span class="posted_name">Posted By <a href="#">Amit Biswas</a></span>
            <h2>{title}</h2>
            <p className='mb-3'>
                {des}
            </p>
            <Link className='' to={'/single-news'}>More Details &#8594;</Link>
        </hgroup>
    </div>
    )
  }
}
