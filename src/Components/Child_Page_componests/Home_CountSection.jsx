import React, { Component } from 'react'

export default class Home_CountSection extends Component {
  render() {
    return (
        <section id="count">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <hgroup>
                        <h2>1500 +</h2>
                        <p>Completed Project</p>
                    </hgroup>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <hgroup>
                        <h2>10 +</h2>
                        <p>Years Expereince</p>
                    </hgroup>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <hgroup>
                        <h2>1920 +</h2>
                        <p>Expert Worker</p>
                    </hgroup>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <hgroup>
                        <h2>30 +</h2>
                        <p>Award Winner</p>
                    </hgroup>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
