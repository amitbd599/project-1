import React, { Component } from 'react'

export default class Home_BlogSection extends Component {
  render() {
    return (
        <section id="blog">
        <div class="container">
            <div class="row">
                <div class="col">
                    <hgroup>
                        <h2>We work with the world’s leading organizations to provide collaborative solutions to your
                            business</h2>
                    </hgroup>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img class="card-img-top img-fluid" src="./img/blog/1.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title">Management Consulting</h4>
                            <p class="card-text text-justify">We offer management consulting services, with management
                                and onground operational support, to help run your global operations.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img class="card-img-top img-fluid" src="./img/blog/2.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title">Adnace Marketing</h4>
                            <p class="card-text text-justify">We offer management consulting services, with management
                                and onground operational support, to help run your global operations.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img class="card-img-top img-fluid" src="./img/blog/3.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title">Top Action Gool</h4>
                            <p class="card-text text-justify">We offer management consulting services, with management
                                and onground operational support, to help run your global operations.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img class="card-img-top img-fluid" src="./img/blog/4.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title">Effective Team Work</h4>
                            <p class="card-text text-justify">We offer management consulting services, with management
                                and onground operational support, to help run your global operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
