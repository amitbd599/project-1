import React, { Component } from 'react'

export default class _AboutMarketingTips extends Component {
  render() {
      const {title, des, img}=this.props;
    return (
        <div class="col-md-4">
        <hgroup class="text-center">
            <img src={img} alt=""/>
            <h2>{title}</h2>
            <p>{des}</p>
        </hgroup>
    </div>
    )
  }
}
