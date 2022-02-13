import React, { Component } from 'react'

export default class Home_DiscoverSection extends Component {
  render() {
    return (
        <section id="discover-service">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 part-1">
                    <hgroup>
                        <h2>Discover <br/>
                            Our Services</h2>
                        <p>We provide services to both public and private sector entities around the world.</p>
                        <div class="all-btn">
                            <button class="btn-2"><a href="#">Learn More</a></button>
                        </div>
                    </hgroup>
                </div>
                <div class="col-xl-9 part-2">
                    <hgroup>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="img-card">
                                    <div class="point-1">
                                        <img src="./img/icon/money.png" alt=""/>
                                        <p>01</p>
                                    </div>
                                    <div class="point-2">
                                        <h3>Financial Advise</h3>
                                        <p>We offer management consulting service with including interim management and
                                            on ground operational support.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img-card">
                                    <div class="point-1">
                                        <img src="./img/icon/sales.png" alt=""/>
                                        <p>02</p>
                                    </div>
                                    <div class="point-2">
                                        <h3>Sales & Trading</h3>
                                        <p>We offer management consulting service with including interim management and
                                            on ground operational support.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img-card">
                                    <div class="point-1">
                                        <img src="./img/icon/bank-building.png" alt=""/>
                                        <p>03</p>
                                    </div>
                                    <div class="point-2">
                                        <h3>Banking Investment</h3>
                                        <p>We offer management consulting service with including interim management and
                                            on ground operational support.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img-card">
                                    <div class="point-1">
                                        <img src="./img/icon/sales.png" alt=""/>
                                        <p>04</p>
                                    </div>
                                    <div class="point-2">
                                        <h3>Google Analysis</h3>
                                        <p>We offer management consulting service with including interim management and
                                            on ground operational support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </hgroup>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
